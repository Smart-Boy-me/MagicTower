//对战系统

function fight(monster) {//遭遇怪物时对战
    if(player.att > monster.def){
        if(monster.att <= player.def){//敌方未能击破我方护甲
            player.exp += monster.exp;
            player.coin += monster.coin;
            return true;
        }else{
            var hp = player.hp;
            var hp_m = monster.hp;
            while (hp_m > 0 && hp > 0){
                hp_m -= (player.att-monster.def);
                hp -= (monster.att - player.def);
            }
            if(hp < 0){//打不过
                return false;
            }else{
                player.hp = hp;
                player.exp += monster.exp;
                player.coin += monster.coin;
                return true;
            }
        }

    }
    else {//我们未击破敌方护甲
        return false;
    }
}

function getFightInfo(monster) {//获取对战信息
    if(player.att > monster.def){
        if(monster.att <= player.def){//敌方未能击破我方护甲
            return {
                name:monster.name,
                hp:monster.hp,
                att:monster.att,
                def:monster.def,
                damage:0,
                coin:monster.coin
            };
        }else{
            var hp = player.hp;
            var hp_m = monster.hp;
            while (hp_m > 0 && hp > 0){
                hp_m -= (player.att-monster.def);
                hp -= (monster.att - player.def);
            }
            if(hp < 0){//打不过
                return {
                    name:monster.name,
                    hp:monster.hp,
                    att:monster.att,
                    def:monster.def
                };
            }else{
                var damage = player.hp-hp;

                return {
                    name:monster.name,
                    hp:monster.hp,
                    att:monster.att,
                    def:monster.def,
                    damage:damage,
                    coin:monster.coin
                };
            }
        }

    }
    else {//我们未击破敌方护甲
        return {
            name:monster.name,
            hp:monster.hp,
            att:monster.att,
            def:monster.def
        };
    }

}