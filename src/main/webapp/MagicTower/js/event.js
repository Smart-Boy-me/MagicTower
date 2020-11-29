//键盘触发事件系统
function setEvent() {
    $(document).keydown(function (e) {//注册键盘事件
        if (player.isTalking) {//退出对话状态
            player.isTalking = 0;
            draw();
        }

        if (player.isTalkingToTrader && e.keyCode == 78) {
            player.isTalkingToTrader = 0;
            draw();
        }

        if (player.isLookingBook && e.keyCode != 32) {//输入空格键外任意键退出阅读怪物书状态
            player.isLookingBook = 0;
            draw();
        }


        if (player.isLookingHelp && e.keyCode !== 70) {//退出阅读帮助状态
            player.isLookingHelp = 0;
        }

        if (player.isBuying) {
            if(player.coin >= (10 * player.buyTimes * (player.buyTimes - 1) + 20)){
                if (e.keyCode == 49 || e.keyCode == 50 || e.keyCode == 51)
                    player.coin -= (10 * player.buyTimes * (player.buyTimes - 1) + 20);
                if (e.keyCode == 49) {        //1
                    player.hp += 100;
                } else if (e.keyCode == 50) {  //2
                    player.att += 2;
                } else if (e.keyCode == 51) {  //3
                    player.def += 4;
                }
            }
            player.isBuying = 0;
            draw();
        }

        if (player.isTalkingToTrader) {//和商人交易
            if (e.keyCode == 89) {
                trade();
            }
            player.isTalkingToTrader = 0;
            draw();
        }

        switch (e.keyCode) {
            case 68: //跳到下一楼 D
                if (data[player.floor + 1]) {
                    player.floor++;
                    draw();
                }
                break;

            case 65: //跳到上一楼 A
                if (data[player.floor - 1]) {
                    player.floor--;
                    draw();
                }
                break;

            case 37://向左
                if (player.x > 1) {
                    checkData(3);
                    checkEvent();
                }
                player.face = 2;
                draw();
                return false;
                break;

            case 38://向上
                if (player.y > 1) {
                    checkData(1);
                    checkEvent();
                }
                player.face = 4;
                draw();
                return false;
                break;

            case 39://向右
                if (player.x < 11) {
                    checkData(4);
                    checkEvent();
                }
                player.face = 3;
                draw();
                return false;
                break;

            case 40://向下
                if (player.y < 11) {
                    checkData(2);
                    checkEvent();
                }
                player.face = 1;
                draw();
                return false;
                break;
            case 70://F
                if (player.isLookingHelp) {
                    player.isLookingHelp = 0;
                } else {
                    player.isLookingHelp = 1;
                }
                draw();
                break;
            case 76://L
                loadData();
                break;
            case 82://R
                replay();
                break;
            case 83://S
                saveData();
                break;
            case 32: //空格
                if (player.handbook)
                    player.isLookingBook = 1;
                return false;
                break;
        }
    });
}

function checkData(n) {
    var map = data[player.floor]; //当前用户所在楼层的地图数组
    var next;                     //下一步走到的位置(数组下标)
    switch (n) {//1 2 3 4 : 上 下 左 右
        case 1:
            next = (player.y - 2) * 11 + player.x - 1;
            break;
        case 2:
            next = (player.y) * 11 + player.x - 1;
            break;
        case 3:
            next = (player.y - 1) * 11 + player.x - 2;
            break;
        case 4:
            next = (player.y - 1) * 11 + player.x;
            break;
    }
    var Is_move = true;

    switch (map[next]) { //1~8：建筑, 9~20：人物, 21~30：道具
        case 1: // 墙
            Is_move = false;
            break;
        case 2: // 牢门
            Is_move = false;
            break;
        case 3: // 下楼梯
            if (data[player.floor - 1]) {//如果楼层存在，则下一层楼
                player.floor--;
            }
            break;
        case 4: // 上楼梯
            if (data[player.floor + 1]) {//如果楼层存在，则上一层楼
                player.floor++;
            }
            break;
        case 5: // 黄门
            if (player.yellowKey > 0) {//有黄钥匙，开黄门
                data[player.floor][next] = 0;//将门清除
                player.yellowKey--;
            } else {
                Is_move = false;
            }
            break;
        case 6: // 蓝门
            if (player.blueKey > 0) {//有蓝钥匙，开门
                data[player.floor][next] = 0;//将门清除
                player.blueKey--;
            } else {
                Is_move = false;
            }
            break;
        case 7: // 红门
            if (player.redKey > 0) {//有红钥匙，开门
                data[player.floor][next] = 0;//将门清除
                player.redKey--;
            } else {
                Is_move = false;
            }
            break;
        case 8: // 自动门
            data[player.floor][next] = 0;//将门清除
            break;
        case 9: // 骷髅人
            if (fight(m9)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 10: // 骷髅士兵
            if (fight(m10)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 11: // 骷髅队长
            if (fight(m11)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 12: // 小蝙蝠
            if (fight(m12)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 13: // 绿史莱姆
            if (fight(m13)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 14: // 红史莱姆
            if (fight(m14)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 15: // 初级法师
            if (fight(m15)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 16: // 初级卫兵
            if (fight(m16)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 17: // 中级卫兵
            if (fight(m17)) {
                data[player.floor][next] = 0;//将怪物清除
            } else {
                Is_move = false;
            }
            break;
        case 18: // 智慧老人
            player.hearing = "智慧老人：" + NPC_Wiser_Word[player.floor];
            player.isTalking = 1;
            Is_move = false;
            data[player.floor][next] = 0;
            draw();
            break;
        case 19: // 商人
            player.hearing = "商人：" + NPC_Trader_Word[player.floor];
            player.isTalkingToTrader = 1;
            Is_move = false;
            draw();
            break;
        case 20: // 商店
            Is_move = false;
            player.isBuying = 1;
            draw();
            break;
        case 21: // 红宝石
            player.att += 2;
            break;
        case 22: // 蓝宝石
            player.def += 2;
            break;
        case 23: // 红药水
            player.hp += 50;
            break;
        case 24: // 蓝药水
            player.hp += 100;
            break;
        case 25: // 黄钥匙
            player.yellowKey++;
            break;
        case 26: // 蓝钥匙
            player.blueKey++;
            break;
        case 31: // 红钥匙
            player.redKey++;
            break;
        case 27: // 记事本
            player.exp += 10;
            break;
        case 28: // 铁剑
            player.sword = 1;
            player.att += 10;
            break;
        case 29: // 铁盾
            player.shield = 1;
            player.def += 10;
            break;
        case 30: // 楼层传送器
            break;
    }
    if (map[next + 1] == 20 || map[next - 1] == 20)
        Is_move = false;
    if (map[next] >= 21 && map[next] <= 31) {
        data[player.floor][next] = 0;
    }
    if (Is_move) {
        player.y = parseInt(next / 11) + 1;
        player.x = next % 11 + 1;
    }
}

event_set = [
    0, //2楼中级卫兵被打败，开牢门
    0, //2楼智慧老人加10%攻击和防御
    0, //3楼智慧老人给怪物书
    0, //8楼初级卫兵被打败，开自动门
    0, //10楼进入陷阱
    0, //决战
    0, //凯旋
];

function checkEvent() {

    if(player.exp >= player.level*10){//升级
        player.exp -= player.level*10;
        player.level++;
        player.hp = Math.ceil(player.hp*1.05);
        player.att = Math.ceil(player.att*1.05);
        player.def = Math.ceil(player.def*1.05);
    }

    if (!event_set[0]) { //
        if (data[2][16] == 0 && data[2][18] == 0) {//2楼中级卫兵被打败，开牢门
            data[2][48] = data[2][81] = data[2][114] = 0;
            data[2][52] = data[2][85] = data[2][118] = 0;
            event_set[0] = 1;
        }
    }

    if(!event_set[1]){
        if(data[2][43]==0){//2楼智慧老人加10%攻击和防御
            player.att = Math.floor(player.att * 1.1);
            player.def = Math.floor(player.def * 1.1);
            event_set[1] = 1;
        }
    }

    if (!event_set[2]){
        if(data[3][43]===0){//3楼智慧老人给怪物书
            player.handbook = 1;
            event_set[2] = 1;
        }
    }

    if(!event_set[3]){
        if(data[8][52]==0 && data[8][54]==0){//8楼初级卫兵被打败，开自动门
            data[8][42]=0;
            event_set[3] = 1;
        }
    }

    if(!event_set[4]){
        if(player.floor==10 && data[10][38]!=0 && player.x == 6 && player.y == 6){//10楼进入陷阱
            player.y = 5;
            player.hearing = "哈哈，你上当了！";
            player.isTalking = 1;

            data[10][27]=data[10][71]=8;
            for(var k = 0; k<43; k++){
                data[10][k]=0;
            }

            data[10][16]=11;
            data[10][37]=data[10][39]=data[10][48]=data[10][50]=data[10][59]=data[10][61]=9;
            data[10][38]=data[10][60]=10;
            event_set[4] = 1;
        }
    }

    if(!event_set[5]){  //决战
        if(event_set[5] && (data[10][37]+data[10][38]+data[10][39]+data[10][48]+data[10][50]+data[10][59]+data[10][60]+data[10][61]) == 0){//10楼打败陷阱怪
            player.hearing = "不可能，你无法打败我！来吧！让我们一决高下！";
            player.isTalking = 1;
            data[10][27]=0;
            event_set[5] = 1;
        }
    }

    if(!event_set[6]){
        if(event_set[5] && data[10][16]==0){//10楼骷髅队长被打败
            player.hearing = "啊！怎么可能！我居然被你打败了！别高兴得太早，后面还有更困难的在等着你！";
            player.isTalking = 1;
            event_set[6] = 1;

            data[10][115]=4;
            data[10][36]=data[10][40]=data[10][71]=0;
        }
    }
    if(event_set[6] && player.x == 6 && player.y ==10){
        player.hearing = "新的篇章后续开启！";
        player.isTalking = 1;
    }
}