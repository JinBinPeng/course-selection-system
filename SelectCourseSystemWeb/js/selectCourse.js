// 渲染用户名到欢迎文本
document.getElementsByClassName("info")[0].innerHTML = "<span>欢迎您，" + localStorage.getItem("name") + "</span><a onclick=\"exit()\">[退出]</a>";

$.ajax({
    type: "get",
    url: "http://139.199.220.49:8888/api/course?pageSize=8",
    dataType: "json",
    async: false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
    cache: false,
    contentType: "application/json",
    beforeSend: function (request) {
        request.setRequestHeader("token",localStorage.getItem("token"));
    },
    success: function (data) {
        var table = data.data.list;
// 遍历集合 index 是索引，item 是当前的对象
        $.each(table, function (index, item) {
            if (index > 0) {
                $("#stusctab").html($("#stusctab").html() + "<tr align=\"center\">" + "<td>" +                                      item.courseNumber + "</td>" +
                    "<td>" + item.courseName + "</td>" + "<td>" + item.credits + "</td>" +
                    "<td>" + item.courseTeacher + "</td>" + "<td><button class=\"selectedbtn\" onclick=\"sentAjax(this)\">选中</button></td>");
                localStorage.setItem("courseId"+index,item.courseId);
            }
        });
    }
});

// 根据课程名称搜索
function searchCourse() {
    var searchTxt = document.getElementById("search").value;
    var table = document.getElementsByClassName("sc")[0];
    var tr = table.getElementsByTagName("tr");

    // 循环表格每一行，查找匹配项
    for(var i = 0;i<tr.length;i++){
        var td = tr[i].getElementsByTagName("td")[1];    // [1]这里是课程名称列
        if(td){
            if(td.innerHTML.indexOf(searchTxt) > -1){
                tr[i].style.display = "";
            }else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sentAjax(elem) {
    $.ajax({
        type:"post",
        url:"http://139.199.220.49:8888/api/userCourse",
        dataType:"json",
        async:false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
        cache:false,
        contentType:"application/json",
        data:"{" +                       // 严格模式传json数据
        "\"userId\": \"" + localStorage.getItem("userId") + "\"," +
        "\"courseId\": \"" + localStorage.getItem("courseId"+elem.parentNode.parentNode.rowIndex) + "\"" +
        "}",
        beforeSend: function(request) {
            request.setRequestHeader("token",localStorage.getItem("token"));
        },
        success:function (data) {
            if(data.code === 200){
                var table = document.getElementsByClassName("selectedC")[0];
                var p = document.getElementsByClassName("selectedCT")[0];
                p.style.display = "block";
                var tr = elem.parentNode.parentNode;
                table.appendChild(tr.cloneNode(true));   // 需要克隆所有后代，把参数设置 true，否则设置为 false
                table.rows[table.rows.length - 1].deleteCell(4);  // 删掉选中按钮
                alert(data.msg);
            }else{
                console.log("2");
            }
        },
        error:function () {
            alert("select error!")
        }
    });
}