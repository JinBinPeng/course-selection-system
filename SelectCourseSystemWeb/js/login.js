function changeColor(elem) {
    elem.style.background = "#169BD5";
    elem.style.color = "#fff";
    document.getElementById("student").style.background = "#fff";
    document.getElementById("student").style.color = "#000";
}


$("#loginbtn").click(function (event) {
    event.preventDefault();           // 改动一：加上这句才行
    // console.log($("#loginform").submit());
    $.ajax({
        type:"post",
        url:"http://139.199.220.49:8888/api/login",
        async:false,
        cache:false,
        data:"{" +                       // 改动二：jq1.4以上的版本都要用严格模式传json数据
        "\"studentNumber\": \"" + $("#username").val()
        + "\", "+
        "\"password\":\"" + $("#password").val() + "\""+
        "}",
        dataType:"json",
        contentType:"application/json",
        success:function (data) {
            if(data.code === 200){
                // 保存登录者的个人信息，可在登录成功后的跳转页面使用
                localStorage.setItem("token",data.data.token);
                localStorage.setItem("userId",data.data.user.userId);
                localStorage.setItem("department",data.data.user.department);
                localStorage.setItem("studentNumber",data.data.user.studentNumber);
                localStorage.setItem("name",data.data.user.name);
                localStorage.setItem("sex",data.data.user.sex);
                localStorage.setItem("phoneNumber",data.data.user.phoneNumber);
                // 判断是学生还是管理员来跳转成功登录的页面
                if(document.getElementById("username").value.length === 10){
                    window.location.href = "Personal%20information.html";
                }else{
                    window.location.href = "Enter%20student%20information.html";
                }
            }else{
                console.log(111);
                return false;
            }
        },
        error:function () {
            alert("error!");
        }

    })
})