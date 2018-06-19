// 渲染用户名到欢迎文本
document.getElementsByClassName("info")[0].innerHTML = "<span>欢迎您，" + localStorage.getItem("name") + "</span><a onclick=\"exit()\">[退出]</a>";

function sentAjax() {
    Ajax1();
    Ajax2();
    Ajax3();
}
function Ajax1() {
    $.ajax({
        type:"post",
        url:"http://139.199.220.49:8888/api/qiniu/info",
        dataType:"json",
        async:false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
        cache:false,
        data:new FormData($('#adminuploadform')[0]),   // 通过这样来传表单文件
        processData: false,   // 设置为false
        contentType: false,   // 设置为false
        success:function (data) {
            if(data.success === true){
                real_file_path = data.file_path;
//                    alert(real_file_path);
            }else {
//                    alert("2");
            }
        },
        error:function () {
            alert("error!");
        }
    });
}
function Ajax2() {
    $.ajax({
        type:"post",
        url:"http://139.199.220.49:8888/api/course/excel",
        dataType:"json",
        async:false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
        cache:false,
        contentType:"application/json",
        data:"{" +                       // 严格模式传json数据
        "\"excelUrl\": \"" + real_file_path + "\"" +
        "}",
        beforeSend: function(request) {
            request.setRequestHeader("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzQyMDBkNS01Mzg2LTExZTgtODJlZi1lNGY4OWNkYzBkMWYifQ.QPs_5CUaaeZYVjEbrD0ufvH9fJS6DQxLXDH3NJDyBb4");
        },
        success:function (data) {
            if(data.code === 200){
                alert(data.msg);
            }else{
//                    console.log("2");
            }
        },
        error:function () {
            alert("excelerror!")
        }
    });
}
setTimeout(function Ajax3() {
    $.ajax({
        type: "get",
        url: "http://139.199.220.49:8888/api/course?pageSize=8",
        dataType: "json",
        async: false,      // 设置为同步，成功调用时的值可以传到ajax函数外面
        cache: false,
        contentType: "application/json",
        beforeSend: function (request) {
            request.setRequestHeader("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzQyMDBkNS01Mzg2LTExZTgtODJlZi1lNGY4OWNkYzBkMWYifQ.QPs_5CUaaeZYVjEbrD0ufvH9fJS6DQxLXDH3NJDyBb4");
        },
        success: function (data) {
            var table = data.data.list;
// 遍历集合 index 是索引，item 是当前的对象
            $.each(table, function (index, item) {
                if (index > 0) {
                    $("#admintab").html($("#admintab").html() + "<tr align=\"center\">" + "<td>" +                                      item.courseNumber + "</td>" +
                        "<td>" + item.courseName + "</td>" + "<td>" + item.credits + "</td>" +
                        "<td>" + item.courseTeacher + "</td>");
                }
            });
        }
    });
},1000)