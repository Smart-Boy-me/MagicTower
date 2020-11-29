var picture = [];

for (var i = 1; i <= 16; i++) {
    picture[i - 1] = new Image();
    picture[i - 1].src = "image/" + i + ".png";
}

function pic(n) {
    return picture[n - 1];
}


function draw() {
    var c = $("canvas")[0].getContext("2d");

    for (var i = 1; i <= 11; i++) {//绘制两边信息栏
        for (var j = 1; j <= 4; j++) {
            c.drawImage(pic(8), 0, 0, 32, 32, 32 * j, 32 * i, 32, 32);
            c.drawImage(pic(8), 0, 0, 32, 32, 32 * j + 15 * 32, 32 * i, 32, 32);
        }
    }
    for (var i = 1; i <= 11; i++) {//绘制地板
        for (var j = 1; j <= 11; j++) {
            c.drawImage(pic(13), 32 * j + 4 * 32, 32 * i);
        }
    }
    var map_data = data[player.floor];
    //绘制地图的建筑(1-8)、人物(9-20)、道具(21-31)

    for (var i = 1; i <= 11; i++) {
        for (var j = 1; j <= 11; j++) {
            switch (map_data[(i - 1) * 11 + j - 1]) {
                case 1: //绘制墙
                    c.drawImage(pic(14), 32 * j + 32 * 4, 32 * i);
                    break;
                case 2: //绘制牢门
                    c.drawImage(pic(8), 32 * 3, 0, 32, 32, 32 * j + 32 * 4, 32 * i, 32, 32);
                    break;
                case 3: //绘制下楼梯
                    c.drawImage(pic(6), 32 * j + 128, 32 * i);
                    break;
                case 4: //绘制上楼梯
                    c.drawImage(pic(7), 32 * j + 128, 32 * i);
                    break;
                case 5: //绘制黄门
                    c.drawImage(pic(5), 0, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 6: //绘制蓝门
                    c.drawImage(pic(5), 32, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 7: //绘制红门
                    c.drawImage(pic(5), 64, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 8: //绘制自动门
                    c.drawImage(pic(5), 96, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 9: //绘制骷髅人
                    c.drawImage(pic(3), 32 * picState, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 10: //绘制骷髅士兵
                    c.drawImage(pic(3), 32 * picState, 32, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 11: //绘制骷髅队长
                    c.drawImage(pic(3), 32 * picState, 64, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 12: //绘制小蝙蝠
                    c.drawImage(pic(3), 32 * picState, 128, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 13: //绘制绿史莱姆
                    c.drawImage(pic(3), 32 * picState, 256, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 14: //绘制红史莱姆
                    c.drawImage(pic(3), 32 * picState, 288, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 15: //绘制初级法师
                    c.drawImage(pic(3), 32 * picState, 384, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 16: //绘制初级卫兵
                    c.drawImage(pic(3), 32 * picState, 640, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 17: //绘制中级卫兵
                    c.drawImage(pic(3), 32 * picState, 672, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 18: //绘制智慧老人
                    c.drawImage(pic(10), 32 * picState, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 19: //绘制商人
                    c.drawImage(pic(10), 32 * picState, 32, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 20: //绘制商店
                    c.drawImage(pic(12), 32 * (j - 1) + 128, 32 * i);
                    break;
                case 21: //绘制红宝石
                    c.drawImage(pic(2), 0, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 22: //绘制蓝宝石
                    c.drawImage(pic(2), 32, 0, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 23: //绘制红药水
                    c.drawImage(pic(2), 0, 32, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 24: //绘制蓝药水
                    c.drawImage(pic(2), 32, 32, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 25: //绘制黄钥匙
                    c.drawImage(pic(2), 0, 128, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 26: //绘制蓝钥匙
                    c.drawImage(pic(2), 32, 128, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 27: //绘制记事本
                    c.drawImage(pic(2), 32, 32 * 7, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 28: //绘制铁剑
                    c.drawImage(pic(2), 0, 32 * 12, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 29: //绘制铁盾
                    c.drawImage(pic(2), 0, 32 * 14, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
                case 30: //绘制楼层传送器
                    c.drawImage(pic(16), 32 * j + 128, 32 * i);
                    break;
                case 31: //红钥匙
                    c.drawImage(pic(2), 64, 128, 32, 32, 32 * j + 128, 32 * i, 32, 32);
                    break;
            }
        }
    }

    //绘制玩家
    c.drawImage(pic(1), 0, (player.face - 1) * 32, 32, 32, 32 * player.x + 32 * 4, 32 * player.y, 32, 32);//绘制主角
    //绘制左边的信息框
    c.fillStyle = "#999999";
    c.fillRect(45, 45, 100, 30);
    c.font = "25px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("第" + player.floor + "层", 60, 60);

    c.fillStyle = "#999999";
    c.fillRect(45, 85, 100, 90);
    c.font = "10px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("生命  " + player.hp, 60, 100);
    c.fillText("攻击  " + player.att, 60, 120);
    c.fillText("防御  " + player.def, 60, 140);
    c.fillText("金币  " + player.coin, 60, 160);

    c.fillStyle = "#999999";
    c.fillRect(45, 185, 100, 96);
    c.drawImage(pic(2), 0, 128, 32, 32, 45, 185, 32, 32);//黄钥匙
    c.drawImage(pic(2), 32, 128, 32, 32, 45, 217, 32, 32);//蓝钥匙
    c.drawImage(pic(2), 64, 128, 32, 32, 45, 249, 32, 32);//红钥匙
    c.font = "10px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText(player.yellowKey + "  把", 90, 202);
    c.fillText(player.blueKey + "  把", 90, 234);
    c.fillText(player.redKey + "  把", 90, 266);

    c.fillStyle = "#999999";
    c.fillRect(45, 291, 100, 80);
    c.font = "10px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("F帮助", 60, 310);
    c.fillText("R重玩", 100, 310);
    c.fillText("S存档", 60, 350);
    c.fillText("L读档", 100, 350);


    //绘制右边信息栏

    c.fillStyle = "#999999";
    c.fillRect(525, 45, 100, 64);
    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("等级：" + player.level, 530, 62);
    c.fillText("经验：", 530, 90);
    c.font = "15px Arial";
    c.fillText(player.exp, 590, 92)

    c.fillStyle = "#999999";
    c.fillRect(525, 119, 100, 100);
    c.font = "15px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";

    c.fillText("获得物品", 545, 134);
    if (player.handbook != 0) {
        c.drawImage(pic(2), 0, 32 * 7, 32, 32, 558, 144, 32, 32);
        c.font = "10px Arial";
        c.fillText("按下空格查看怪物手册", 526, 184);
    }

    c.fillStyle = "#999999";
    c.fillRect(525, 230, 100, 64);
    c.font = "12px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";

    if (player.sword != 0) {
        c.drawImage(pic(2), 0, 384, 32, 32, 530, 230, 32, 32);
        c.fillText("铁剑", 565, 245);
    } else
        c.fillText("无武器", 555, 245);

    if (player.shield != 0) {
        c.drawImage(pic(2), 0, 448, 32, 32, 525, 262, 32, 32);
        c.fillText("铁盾", 565, 277);
    } else
        c.fillText("无防具", 555, 277);


    if (player.isTalking) {
        drawTaking();
    } else if (player.isTalkingToTrader) {
        drawTalkingToTrader();
    } else if (player.isBuying) {
        drawBuying();
    } else if (player.isLookingBook) {
        //查看怪物手册
        drawLookingBook();
    } else if (player.isLookingHelp) {
        //查看帮助
        drawLookingHelp();
    }

}

function drawTaking() {//绘制聊天状态
    var c = $("canvas")[0].getContext("2d");
    c.fillStyle = "#666666";
    c.fillRect(160, 128, 352, 160);

    drawText(player.hearing, 165, 146);

    c.font = "8px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("按任意键继续", 300, 280);
}

function drawTalkingToTrader() {//绘制在商人处购买状态
    var c = $("canvas")[0].getContext("2d");
    c.fillStyle = "#666666";
    c.fillRect(160, 128, 352, 160);

    drawText(player.hearing, 165, 146);

    c.font = "8px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";

    c.fillStyle = "#555555";
    c.fillRect(271, 248, 65, 32);
    c.fillRect(341, 248, 65, 32);

    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("确定:Y", 275, 263);
    c.fillText("取消:N", 345, 263);
}

function drawBuying() {//绘制在商店处购买状态
    var c = $("canvas")[0].getContext("2d");
    var n = player.buyTimes;
    c.fillStyle = "#666666";
    c.fillRect(160, 96, 352, 224);

    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("商店", 316, 116);

    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("给我" + (10 * n * (n - 1) + 20) + "个金币", 276, 146);
    c.fillText("我就提升你以下一种能力", 226, 166);

    c.fillStyle = "#555555";
    c.fillRect(270, 186, 140, 32);
    c.fillRect(270, 228, 140, 32);
    c.fillRect(270, 270, 140, 32);

    c.fillRect(210, 186, 50, 116);
    c.font = "13px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("输 入", 220, 215);
    c.fillText("对 应", 220, 235);
    c.fillText("数 字", 220, 255);
    c.fillText("购 买", 220, 275);

    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("1. 生命 + " + 100 * (Math.floor(player.floor / 10) + 1), 286, 201);
    c.fillText("2. 攻击 + " + 2 * (Math.floor(player.floor / 10) + 1), 286, 243);
    c.fillText("3. 防御 + " + 4 * (Math.floor(player.floor / 10) + 1), 286, 285);
}

function drawLookingBook() {//绘制阅读怪物书状态
    var c = $("canvas")[0].getContext("2d");
    c.fillStyle = "#666666";
    c.fillRect(160, 32, 352, 352);

    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("怪物手册", 300, 52);

    var monster = [];
    var m = data[player.floor];
    for (var a = 0; a < 120; a++) {
        if (monster.indexOf(m[a]) < 0) {
            if (m[a] >= 9 && m[a] <= 17) {
                monster.push(m[a]);
            }
        }
    }

    c.font = "13px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";

    if (monster.length == 0) {
        c.fillText("这层楼没有怪物！", 278, 72);
    }

    var result;
    for (var b = 0; b < monster.length; b++) {
        result = getFightInfo(monster_set[monster[b]]);

        drawMonster(monster_set[monster[b]],162, 40 * (b + 2) - 20);

        if (result.damage == 0) {
            c.fillStyle = "#33CC33";
            c.fillText("你不会受到任何损害，  收获【" + result.coin + "】金币 【"+monster_set[monster[b]].exp+"】经验", 200, 40 * (b + 2) -8);
        } else if (result.damage) {
            c.fillStyle = "#33CC33";
            c.fillText("你将损害【" + result.damage + "】生命，  收获【" + result.coin + "】金币 【"+monster_set[monster[b]].exp+"】经验", 200, 40 * (b + 2) -8);
        } else {
            c.fillStyle = "#FF0033";
            c.fillText("你无法攻击！", 200, 40 * (b + 2) -8);
        }
        c.fillStyle = "white";
        c.fillText(result.name + "：生命" + result.hp + "，攻击" + result.att + "，防御" + result.def + "，金币" + monster_set[monster[b]].coin, 200, 40 * (b + 2)+6 );

    }
    c.font = "8px Arial";
    c.fillText("按任意键继续", 300, 376);
}

function drawLookingHelp() {
    var c = $("canvas")[0].getContext("2d");
    c.fillStyle = "#666666";
    c.fillRect(160, 32, 352, 352);

    c.font = "20px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";
    c.fillText("帮助", 316, 52);
    var help = "很久很久以前，在未知的国度里，有一位小公主，长得美丽动人，深得国王宠爱。" +
        "有一天，妖风大作，一群妖怪将她抓走了，国王非常着急上火。" +
        "国王找人打听到，公主被魔王抓到远方的一座魔塔里，于是国王向全国的勇士发出号令，只要谁先救出小公主，就把小公主许配给谁。" +
        "可是所有去救公主的勇士都是有去无回......" +
        "而你现在误打误撞进入了魔塔，并不要什么小公主，只想赶紧开溜，请你想个办法，靠着键盘方向键尽快逃命。你只有一份存档，祝你好运！";
    drawText(help, 165, 82);
    c.font = "8px Arial";
    c.fillText("按任意键继续", 300, 376);
}


//输出文本
function drawText(s, x, y, w, A) {//字符串、坐标x,y、行宽度、字体大小
    var c = $("canvas")[0].getContext("2d");
    w = w || 330;
    A = A || 20;
    var char = s.split("");
    var temp = "";
    var row = [];

    c.font = s + "px Arial";
    c.fillStyle = "white";
    c.textBaseline = "middle";

    for (var i = 0; i < char.length; i++) {
        if (c.measureText(temp).width >= w) {
            row.push(temp);
            temp = "";
        }
        temp += char[i];
    }
    row.push(temp);

    for (var i = 0; i < row.length; i++) {
        c.fillText(row[i], x, y + i * 20);
    }
}

function drawMonster(monster, x, y) {
    var id = monster.id;
    var c = $("canvas")[0].getContext("2d");
    switch (id) {
        case 9: //绘制骷髅人
            c.drawImage(pic(3), 32 * picState, 0, 32, 32, x, y, 40, 40);
            break;
        case 10: //绘制骷髅士兵
            c.drawImage(pic(3), 32 * picState, 32, 32, 32, x, y, 40, 40);
            break;
        case 11: //绘制骷髅队长
            c.drawImage(pic(3), 32 * picState, 64, 32, 32, x, y, 40, 40);
            break;
        case 12: //绘制小蝙蝠
            c.drawImage(pic(3), 32 * picState, 128, 32, 32, x-3, y, 40, 40);
            break;
        case 13: //绘制绿史莱姆
            c.drawImage(pic(3), 32 * picState, 256, 32, 32, x, y, 40, 40);
            break;
        case 14: //绘制红史莱姆
            c.drawImage(pic(3), 32 * picState, 288, 32, 32, x, y-4, 40, 40);
            break;
        case 15: //绘制初级法师
            c.drawImage(pic(3), 32 * picState, 384, 32, 32, x, y, 40, 40);
            break;
        case 16: //绘制初级卫兵
            c.drawImage(pic(3), 32 * picState, 640, 32, 32, x, y, 40, 40);
            break;
        case 17: //绘制中级卫兵
            c.drawImage(pic(3), 32 * picState, 672, 32, 32, x, y, 40, 40);
            break;
    }
}