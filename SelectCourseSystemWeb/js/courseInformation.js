// 渲染用户名到欢迎文本
document.getElementsByClassName("info")[0].innerHTML = "<span>欢迎您，" + localStorage.getItem("name") + "</span><a onclick=\"exit()\">[退出]</a>";

$.ajax({
    type: "put",
    url: "http://139.199.220.49:8888/api/userCourse",
    dataType: "json",
    async: false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
    cache: false,
    contentType: "application/json",
    beforeSend: function (request) {
        request.setRequestHeader("token",localStorage.getItem("token"));
    },
    data:"{" +                       // 严格模式传json数据,把修改后的数据全部传出去
    "\"userId\": \"" + localStorage.getItem("userId") + "\" " +
    "}",
    success: function (data) {
        var table = data.data.list;
//            console.log(table)
// 遍历集合 index 是索引，item 是当前的对象
        $.each(table, function (index, item) {
            $("#citab").html($("#citab").html() + "<tr align=\"center\">" + "<td>" +                                      item.courseVo.courseNumber + "</td>" +
                "<td>" + item.courseVo.courseName + "</td>" + "<td>" + item.courseVo.credits + "</td>" +
                "<td>" + item.courseVo.courseTeacher + "</td>" + "<td><button class=\"selectedbtn\" onclick=\"cancel(this)\">退选</button></td>");
            localStorage.setItem("id"+index,item.id);
        });
    },
    error:function () {
        alert("error!")
    }
});

function cancel(elem) {  //传入要删除行的元素
    $.ajax({
        type: "delete",
        url: "http://139.199.220.49:8888/api/userCourse/"+ localStorage.getItem("id" + elem.parentNode.parentNode.rowIndex),
        dataType: "json",
        async: false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
        cache: false,
        contentType: "application/json",
        beforeSend: function (request) {
            request.setRequestHeader("token",localStorage.getItem("token"));
        },
        success: function (data) {
            if(data.code === 200){
                alert(data.msg);
            }else{
                alert("2")
            }
        },
        error:function () {
            alert("error!")
        }
    });



    var table = document.getElementsByTagName("table")[0];
    var tr = elem.parentNode.parentNode;
    table.deleteRow(tr.rowIndex);
}