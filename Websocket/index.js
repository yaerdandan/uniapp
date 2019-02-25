var ws = require("nodejs-websocket");
var PORT = 8003

// var server = require('ws').Server;
// var ws = new server({
// 	port: 8003
// });
var connNum = [];

var connections = []; //进来的人

// 单聊在线
var signallines = [];
// 群组的成员的表
// var group = [];
// 	group = [{
// 			id: 1,
// 			members: []
// 		},
// 		{
// 			id: 2,
// 			members: []
// 		},
// 	];
var owner = [];
var owner1 = [];
// 在线人员的表 group在线
var onlines = [];
// 单聊在线
var signallines = [];

Array.prototype.contains = function(element) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == element) {
			return true;
		}
	}
	return false;
}

Array.prototype.remove = function(val) {
	for (var i = 0; i < this.length; i++) {
		var index = this.indexOf(val);
		if (index > -1) {
			this.splice(index, 1);
		}
	}
};
// var group = [];
var group = [];
for(var i=0;i<10;i++){
	group.push({
		id:i,
		members:[],
		onlines:[],
		owner:[]
	})
}

var server = ws.createServer(function(socket) {
	connNum.push(socket);
	console.log("连接了" + connNum.length);
	var user;

	socket.on("text", function(msg) {
		user = JSON.parse(msg);
		console.log(user);
		if (user.group != undefined) {
			for (var i = 0; i < group.length; i++) {
				if (group[i].id == user.group) {
					console.log("12345");
					var isTrue = true;
					continue;
				} else {
					var isTrue = false;
				}
			}
		
		if (!isTrue) {
			group.push({
				id: user.group,
				members: [],
				onlines:[],
				owner:[]
			})
		}
		console.log('group'+JSON.stringify(group));
		console.log(group[user.group])
		
		for (var i = 0; i < group.length; i++) {
			if (user.group == group[i].id) {
				if (!group[user.group].members.contains(user.name)) {
					group[user.group].members.push(user.name);
					group[user.group].owner.push({
						groupnumber: user.group,
						name: user.name,
						ownerImg: user.Img
					});
					console.log('owner'+JSON.stringify(group[user.group].owner));
					broadcast(JSON.stringify(group[user.group].owner));
				}
				if (group[user.group].members.contains(user.name)) {
					if(!group[user.group].onlines.contains(user.name)){
						group[user.group].onlines.push(user.name); //群聊的人在线状态的标识
					}
				} else {
					return;
				}
				continue;
			}
		}
		}
		else{
			connections.push(user);
		}
		console.log('connections'+JSON.stringify(connections));
		
		// 		if (user.group != undefined) {
		// 			//判断是那个分组
		// 			if (user.group == 1) {
		// 				//判断是否在分组中
		// 				if(!group[0].members.contains(user.name)){
		// 					group[0].members.push(user.name);
		// 					owner.push({
		// 						groupnumber:user.group,
		// 						name:user.name,
		// 						ownerImg:user.Img
		// 					});
		// 					console.log(owner);
		// 					broadcast(JSON.stringify(owner));
		// 				}
		// 				
		// 				if (group[0].members.contains(user.name)) {
		// 						onlines.push(user.name); //群聊的人在线状态的标识
		// 				} else {
		// 					return;
		// 				}
		// 			}else if(user.group == 2){
		// 					//判断是否在分组中
		// 					if(!group[1].members.contains(user.name)){
		// 						group[1].members.push(user.name);
		// 						owner1.push({
		// 							groupnumber:user.group,
		// 							name:user.name,
		// 							ownerImg:user.Img
		// 						});
		// 						broadcast(JSON.stringify(owner1));
		// 					}
		// 					if (group[1].members.contains(user.name)) {
		// 							onlines.push(user.name); //群聊的人在线状态的标识
		// 					} else {
		// 						return;
		// 					}
		// 			}
		// 		}
		// 		else{
		// 			connections.push(user);
		// 		}
		// 		// console.log('group'+group[0]['members']);
		// 		// 当发起单聊的人超过1个人的时候，就要确定单聊的路线
				if (connections.length > 1) {
				    for (var i = 0; i < connections.length; i++) {
				        for (var j = i + 1; j < connections.length; j++) {
				            // 这里是判断单聊的路线，toname是要发送的人和要接受的人是否一样
				            if (connections[i].toname == connections[j].name &&
				                connections[j].toname == connections[i].name) {
				                signallines.push(connections[j].toname);
				                signallines.push(connections[j].name);
				            }
				        }
				    }
				}
				
				 console.log("Received " + msg);
		// 		 
		// 		 
		// 		 
				 // 下面这些就是通过上面的信息，组织下要发送的信息
				
				var mes = {};
				mes.type = user.type;
				if (mes.type == 'enter') {
				    mes.data = user.name;
				} else {
				    mes.data = user.data;
				}
				mes.Img = user.Img;
				mes.name = user.name; //发起会话的人的姓名  这里最好使用id
				mes.toname = user.toname; //只会在单聊的时候存在，要发送给谁，也最好用id
				mes.groupnumber = user.group; //群聊的时候，群聊的id
				mes.chatImg = user.chatImg; //发送的照片
		 		
		// 		console.log('group在线的人', onlines);
		// 		console.log('发送人的信息', mes);
		// 		console.log('接受的人', mes.toname);
		// 		console.log('进入私聊的人',connections);
				
				if (mes.groupnumber != undefined){
					if(mes.data != mes.name){
						// 你要单独给好友聊天，这里检测好友是否在群聊
						if (onlines.contains(mes.toname)) {
							// console.log('我要发送的对象在群聊')
							broadcast(JSON.stringify("好友在忙碌"));
						} else {
							broadcast(JSON.stringify(mes));
						}
					}
				} else {
				    // 你要单独给好友聊天，这里检测好友是否在和别人聊天
					if(mes.data != mes.name){
						if (signallines.contains(mes.toname) && signallines.contains(mes.name)) {
							// console.log('正确');
						    broadcast(JSON.stringify(mes));
						} else {
						    // console.log('我要发送的---对象在和别人聊天')
						    broadcast(JSON.stringify("好友在忙碌"));
						}
					}
				}

	});

	socket.on("close", function(code, reason) {
		console.log("code closed", code);
		console.log("reason closed", reason);
		var mes = {};
		mes.type = "leave"
		// mes.data = user.name + 'leave';
		if(user.group != undefined){
					group[user.group]['members'].splice(group[user.group]['members'].indexOf(this), 1);
					group[user.group].onlines.splice(onlines.indexOf(this), 1);
					group[user.group].owner.splice(group.indexOf(this),1);
		}
		connections.splice(connections.indexOf(this), 1);
		signallines.splice(signallines.indexOf(this), 1);
		
		// broadcast(JSON.stringify(mes))
		// console.log(user.name);
		
	})
	socket.on("error", function(err) {
		console.log('handle err');
		console.log(err);
	})
}).listen(PORT)

function broadcast(str) {
	console.log('str', str);
	// 取到server下面的所有连接
	// console.log(server.connections);
	server.connections.forEach(function(connection) {
		connection.sendText(str);
	})
}
