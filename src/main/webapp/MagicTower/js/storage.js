//档案管理
function replay(){
	if(confirm("重玩不仅会让让游戏回到原点，而且会清除存档，确定继续吗？")){
		if(id==0){
			localStorage.clear();
			location.reload(true);
		}
		else{
			$.post("../replayServlet",{id:id},function (data) {
				loadData();
			});
		}
	}
}

function saveData(){
	if(confirm("上一份存档将被覆盖，确定存档？")){
		if(id == 0){
			localStorage.player = JSON.stringify(player);
			localStorage.data = JSON.stringify(data);
			alert("未登录，本地存档成功！");
		}
		else{
			$.post("../saveServlet",{id:id, player:JSON.stringify(player), data:JSON.stringify(data), id:id},function (data) {
				alert("存档成功！");
			},"text");
		}

	}
}

function loadData(){
	if(confirm("确认读档？")){
		if(id==0){
			if(!localStorage.player){
				alert("未发现本地存档！");
			}
			else{
				player = JSON.parse(localStorage.player);
				data = JSON.parse(localStorage.data);
				alert("未登录，读取本地存档！");
			}
		}
		else{
			$.post("../loadServlet",{id:id},function (back) {
				if(back == "null"){
					alert("未发现存档！");
					return;
				}
				var json = JSON.parse(back);
				player = JSON.parse(json.player);
				data = JSON.parse(json.data);
			},"text");
		}
	}
}