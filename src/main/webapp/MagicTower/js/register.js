window.onload = function(){
    document.getElementById("form").onsubmit = function(){
        var flag = checkUsername() && checkPassword() && checkCode();
        if(flag == false) return flag;
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajaxSettings.async = false;
        $.post("../registerServlet",{username:username,password:password},function () {
            alert("注册成功！");
            window.location.href="index.html";
        })
        $.ajaxSettings.async = true;
        return flag;
    }

    document.getElementById("username").onblur = checkUsername;
    document.getElementById("password").onblur = checkPassword;
    var check_img = document.getElementById("img_check");
    check_img.onclick = function () {
        var date = new Date().getTime();
        check_img.src = "../checkCodeDemo?"+date;
    }
}

function clickcode() {
    var check_img = document.getElementById("img_check");
    var date = new Date().getTime();
    check_img.src = "../checkCodeDemo?"+date;
}

function checkUsername(){
    var username = document.getElementById("username").value;
    var reg_username = /^\w{6,12}$/;
    var flag = reg_username.test(username);
    var s_username = document.getElementById("s_username");
    if(flag){
        s_username.innerHTML = "<img height='20' width='20' src='image/loading.gif'>";
        $.post("../userNameExistServlet",{username:username},function (data) {
            if(data=="true"){
                s_username.innerHTML = "用户名已存在";
            }
            else{
                s_username.innerHTML = "<img height='25' width='35' src='image/gou.png'>";
            }
        },"text");
    }else{
        s_username.innerHTML = "用户名6-12位";
    }
    return flag;
}

function checkPassword(){
    var password = document.getElementById("password").value;
    var reg_password = /^\w{6,12}$/;
    var flag = reg_password.test(password);
    var s_password = document.getElementById("s_password");
    if(flag){
        s_password.innerHTML = "<img height='25' width='35' src='image/gou.png'>"
    }else{
        s_password.innerHTML = "密码6-12位";
    }
    return flag;
}

function checkCode() {
    var flag = true;
    var code = $("#checkcode").val();
    $.ajaxSettings.async = false;
    $("#loading").html("<img height='20' width='20' src='image/loading.gif'>");
    $.post("../verifyCodeServlet",{code:code},function (data) {
        if(data == "false"){
            alert("验证码错误！");
            clickcode();
            flag = false;
        }
    },"text")
    $("#loading").html("");
    $.ajaxSettings.async = true;
    return flag;
}