// require("http").createServer(function(req,res){
// 	res.writeHead(200,{"Content-Type":"text/html"});
// 	res.end("<h1>Hello World</h1>");
// }).listen(3000);

var net = require("net");
var count = 0;
var users = {};
var nickname;
var server = net.createServer(function(conn){
	conn.write(
		"\n > welcome to \033[92m node-chat\033[39m!"
		+"\n > " + count + " other people are connected at this time."
		+"\n > please write your name and press enter: "
		);
	count++;

	function broadcast(msg,exceptMyself){
		for(var i in users){
			if(!exceptMyself || i != nickname){
				users[i].write(msg);
			}
		}
	}

	conn.on("data",function(data){
		data = data.replace("\r\n","");
		if(!nickname){
			if(users[data]){
				conn.write("\033[93m> nickname already in use.Try again:\033[39m");
				return;
			}else{
				nickname = data;
				users[data] = conn;	
				broadcast("\033[90m > " + nickname + "joined the room\033[39m");	
			}
		}else{
			broadcast("\033[96m > " + nickname + ":\033[39m" + data + "");
		}

		console.log(data);
	});
	
	conn.on("close",function(){
		count--;
		delete users[nickname];
		broadcast("\033[96m > " + nickname + " left the room\033[39m")
	});
conn.setEncoding("utf8");

});

server.listen(3000,function(){
	console.log("\033[96m     server listening on *:3000\033[39m");
})

