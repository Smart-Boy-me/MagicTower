var picState = 0;

$(document).ready(function(){

    $("#canvas").fadeIn("slow");//过场，拖延时间
    initialize();

});



function initialize(){//初始化

    showTitle();
    setEvent();
    draw();
    setInterval(function(){//启动动画
        picState = picState%3+1;
        draw();
    },200);
}

function showTitle(){
    var canvas = $("canvas")[0];
    var c = canvas.getContext("2d");
    c.font = "20px Arial";
    c.fillStyle = "black";
    c.textBaseline = "middle";
    c.fillText("魔塔",canvas.width/2-25,10);
}

