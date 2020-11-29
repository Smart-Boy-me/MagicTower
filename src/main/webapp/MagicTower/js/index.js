var id = 0;
$(function(){
    id = 0;
    $.ajaxSettings.async = false;
    $.post("../indexServlet",{},function (data) {
        id = parseInt(data);
    },"text")
    $.ajaxSettings.async = true;
    if(id != 0) {
        $.post("../getUsernameServlet",{id:id},function (data) {
            alert("欢迎您，"+data);
            $('#s_user').html(data);
        },"text")
    }
    $("#login_off").click(function () {
        $.ajaxSettings.async = false;
        $.post("../login_offServlet",{},function () {
            $("#s_user").html("游客");
            id = 0;
        })
        $.ajaxSettings.async = true;
        location.reload();
    })
})
