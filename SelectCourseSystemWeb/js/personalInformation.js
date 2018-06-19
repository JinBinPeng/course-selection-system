// 从本地存储中取得登录者的个人信息
document.getElementById("pi").innerHTML += "<tr align=\"center\">" + "<td>" +                                      localStorage.getItem("department") + "</td>" +
    "<td>" + localStorage.getItem("studentNumber") + "</td>" + "<td>" + localStorage.getItem("name") + "</td>" + "<td>" + localStorage.getItem("sex") + "</td>" + "<td>" + localStorage.getItem("phoneNumber") + "</td>";

// 渲染用户名到欢迎文本
document.getElementsByClassName("info")[0].innerHTML = "<span>欢迎您，" + localStorage.getItem("name") + "</span><a onclick=\"exit()\">[退出]</a>";

function modify() {
    var tr = document.getElementsByTagName("tr")[1];
    for(var i = 0;i<tr.cells.length;i++) {
        var td = tr.cells[i];
        var tdContext = td.innerHTML;
        var txt = document.createElement("input");
        txt.value = tdContext;
//            console.log(txt.value);
        td.appendChild(txt);
        td.childNodes[0].nodeValue = "";  // 原本文字删掉
    }
}

function sentAjax() {
    $.ajax({
        type:"put",
        url:"http://139.199.220.49:8888/api/user",
        dataType:"json",
        async:false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
        cache:false,
        contentType:"application/json",
        data:"{" +                       // 严格模式传json数据,把修改后的数据全部传出去
        "\"userId\": \"" + localStorage.getItem("userId") + "\", "+
        "\"department\":\"" + document.getElementsByTagName("input")[0].value + "\", "+
        "\"studentNumber\":\"" + document.getElementsByTagName("input")[1].value + "\", "+
        "\"name\":\"" + document.getElementsByTagName("input")[2].value + "\", "+
        "\"sex\":\"" + document.getElementsByTagName("input")[3].value + "\", "+
        "\"phoneNumber\":\"" + document.getElementsByTagName("input")[4].value + "\""+
        "}",
        beforeSend: function(request) {
            request.setRequestHeader("token",localStorage.getItem("token"));
        },
        success:function (data) {
            if(data.code === 200){
                var tr = document.getElementsByTagName("tr")[1];
                for(var i = 0;i<tr.cells.length;i++){
                    var td = tr.cells[i];
                    td.innerHTML = document.getElementsByTagName("input")[0].value;
                }
                alert(data.msg);
            }else {
                alert("2");
            }
        },
        error:function () {
            alert("error!");
        }
    });
}