window.onload = function(){
    document.getElementById("form").onsubmit = function(){
        var username = $("#username").val();
        var password = $("#password").val();
        $("#loading_login").html("<img height='20' width='20' src='image/loading.gif'>");
        $.post("../loginServlet",{username:username,password:password},function (data) {
            if(data == "true"){
                alert("登录成功！");
                window.location.href="index.html";
            }else{
                alert("用户名或密码错误！");
                $("#loading_login").html("");
            }
        },"text")
        return false;
    }
}