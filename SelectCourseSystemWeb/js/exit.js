function exit() {
    $.ajax({
        type: "post",
        url: "http://139.199.220.49:8888/api/loginout",
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
                localStorage.clear();
                window.location.href = "Login.html";
            }else {
                alert("2")
            }
        },
        error:function () {
            alert("3")
        }
    });
}