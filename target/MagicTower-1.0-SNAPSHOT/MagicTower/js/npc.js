//NPC行为系统

function trade() {
    if(player.floor == 2){
        player.coin += 100;
        data[2][76] = 0;
    }else if(player.floor == 6){
        player.coin -= 50;
        player.blueKey++;
    }else if(player.floor == 7){
        player.coin -= 50;
        player.yellowKey += 5;
    }
    else ;
}