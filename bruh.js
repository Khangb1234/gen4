
const { spawn, execSync } = require("child_process");
//const { readFileSync } = require("fs-extra");
const UptimeKuma = require("uptimekuma-api")
let kuma = new UptimeKuma("https://uptime-kuma-1.haimothaihai.repl.co");

kuma.startPushing("push code",60)
async function sh() {
for (let x of (await kuma.status())) {
		for (let monitor of x.monitors) {
				console.log(monitor.name + " " + monitor.heartbeats[1].status+ " - " + (monitor.uptime*100) + "%");
		}
}
}
const {readFileSync, writeFileSync, readdirSync, unlinkSync, statSync} = require("fs-extra");
var fsUtils = require("nodejs-fs-utils");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const fs = require("fs")
const logger = require("./utils/log.js");
const request = require('request');
const chalk1 = require('chalkercli');
const gra = require("gradient-string")
const chalk = require('chalk');
const log = console.log 
const fsize = require("file-size")
const address = require('address');
const c = require("cli-select");
const l = require("./utils/log");
const utils = require("./utils/index.js");
const prompt = require("prompt-sync")();
const chalkAnimation = require("chalkercli");
var TextPro = require('@sl-code-lords/text-pro-me')
var htmlpath = __dirname + "/utils/index.html"
/*const dashboard = http.createServer(function ( req, res) {
		res.writeHead(200, "OK", { "Content-Type": "text/plain" });
		res.sendFile(htmlpath);
		res.end();
});*/
//dashboard.listen(process.env.port || 0)


function startBot(message) {
		(message) ? logger(message, "[ Starting ]") : "";

		const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "MEGU.js"], {
				cwd: __dirname,
				stdio: "inherit",
				shell: true
		});

		child.on("close", (codeExit) => {
				if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
						startBot("Restarting...");
						global.countRestart += 1;
						return;
				} else return;
		});

		child.on("error", function (error) {
				logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
		});
};
//process.exit(0)
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const os = require("os")
function round(num) {
	const num2 = num/1000000000
return +(Math.round(num2 + "e+2") + "e-2");
} 

			//log(round())
	
// sendFillogger will go here
/*app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/utils/index.html'));
});*/

//app.listen(port);

//logger("Opened server site...", "[ Starting ]");
const packagejson = require('./package.json')
const dependencles = Object.keys(packagejson.dependencies);
const listText = `${dependencles}`;
const listItems = listText.split(",");
const formattedList = listItems.map((item, index) => `${index + 1}. ${item.trim()}`);

const configPath = "./config.json";
	const config = require(`./${configPath}`);
let blpg = gra([{color: "blue", pos: 0.2},{color:"pink",pos:0.3},{color:"gold",pos:0.6},{color:"pink",pos:0.8},{color:'blue',pos:1}]);

let mau = gra([{color: "green", pos: 0.2},{color:"blue",pos:0.3},{color:"gold",pos:0.6},{color:"blue",pos:0.8},{color:'green',pos:1}]);
//log(mau("màu mẫu"))
//const banner = readFileSync(__dirname + "/banner.txt", "utf-8").split(/\r?\n/);
		const pack = require("./package.json")
const pack2 = pack.dependencies
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
/*const configPathh = "./config.json";
	const config = require(`./${configPathh}`)*/
			//log(`${pack2.count}`)
async function checkcmd() 
{
//	logger("[=====𝗖𝗛𝗘𝗖𝗞 𝗙𝗜𝗟𝗘 𝗪𝗥𝗢𝗡𝗚=====]");
	logger.bold("==============《 CHECKING 》===============")
				logger("Quá trình kiểm tra sẽ mất vài giây...", "[CHECK ERROR]");
				var v = readdirSync(__dirname + "/modules/commands").filter(jr => {
					return jr.endsWith(".js") && !jr.includes("example");
				});
				var S = readdirSync(__dirname + "/modules/events").filter(jr => {
					return jr.endsWith(".js");
				});
				var q = 0;
				for (var H of v) {
					try {
						var Z = require("./modules/commands/" + H);
						if (Object.keys(Z).length === 0) {
							q++;
							l("File /modules/commands/" + H + " không có nội dung, vui lòng xóa nó đi", "[CHECK ERROR]");
						}
					} catch (jf) {
						q++;
						l("File /modules/commands/" + H + " bị lỗi: " + jf, "[CHECK ERROR]");
					}
				}
				for (var H of S) {
					try {
						var Z = require("./modules/events/" + H);
						if (Object.keys(Z).length === 0) {
							q++;
							l("File /modules/events/" + H + " không có nội dung, vui lòng xóa nó đi", "[CHECK ERROR]");
						}
					} catch (jo) {
						q++;
						l("File /modules/events/" + H + " bị lỗi: " + jo, "[CHECK ERROR]");
					}
				}
				l((q == 0 ? "Không có" : "Có " + q) + " file bị lỗi trong bot của bạn", "[CHECK ERROR]");
	logger.bold("===========================================")
}
				//return process.exit(0);
async function clearcache() {
				var X = readdirSync(__dirname + "/modules/commands/cache").filter(jn => {
					return jn.endsWith(".mp4") || jn.endsWith(".m4a") || jn.endsWith(".png") || jn.endsWith(".jpg") || jn.endsWith(".mp3") || jn.endsWith(".wav");
				});
				var i = 0;
				for (let jn of X) {
					i += statSync(__dirname + ("/modules/commands/cache/" + jn)).size;
					unlinkSync(__dirname + ("/modules/commands/cache/" + jn));
				}
				logger("Giải phóng thành công " + Math.round(i / 1e6) + "Mb", "[ DISK ]");
				await new Promise(jW => {
					return setTimeout(jW, 2e3);
				});
}
async function loginn() {
	const login = require("./includes/fca-disme");
var m = config.EMAIL 
	var p = config .PASSWORD
var credentials = {email: `${m}`, password: `${p}`}; // credential information

login(credentials, (err, api) => {
		if(err) return console.error(err);
		// login
		fs.writeFileSync('app2.json', JSON.stringify(api.getAppState())); //create appstate
});
}

/*async function runbot()
{
	const fkey = config.botkey 
	const cutheme= config.DESIGN.Theme 
	const dcm = config.UPTIME; 
			var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	

			let blpbl = gra("blue","pink","blue")
	let logo = String.raw`=============`; 
	const fstring = blpg(logo+"《 KEY SYSTEM 》"+logo) 
log(chalk.bold(fstring))
	//const keystr = blpg("")
	logger("Tiến hành check key..","[ KEY SYSTEM ]")
	const rb = "[ KEY ] ➢ Tiến hành khỏi động bot"
 
//	const rbb = chalk1.rainbow(rb)
	setTimeout(() => {
		logger("Key đúng..","[ KEY ]")}, 2000);
	
	setTimeout(() => {
	logger("Tiến hành khởi động bot","[ KRY ]")
	}, 4000);
	
	setTimeout(() => { log(blpbl(logo+("===============")+logo))},4500)
setTimeout(() => {logger("Bot name: MEGUMYNT-X","[ INFO ]")},5000)
	setTimeout(() => {logger("Bot verison: 2.0",'[ INFO ]')},5500)
	setTimeout(() => {logger("FREE MEM: "+round(os.freemem)+" GB","[ INFO ]")
logger("TOTAL: "+round(os.totalmem)+" GB","[ INFO ]")
logger(address.ip(),"[ IP ]");
			logger(`Tổng thời gian online: ${anh}H${la}M`, "[ UPTIME ]") 
								 },6000)
	const usern = process.env.REPL_SLUG
	 fsUtils.fsize(`./../${usern}`, function (err, size) {
			var fsize2 = fsize(size).to("MB")
			setTimeout(() => { logger(`${fsize2}/1024MB`,"[ REPL MEM ]")
	logger(`Theme hiện tại: ${cutheme}`,"[ THEME ]")										
		const dcm = os.uptime(); 
			var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
const timestart = Date.now()
logger(`${anh}H ${la}M ${vtoan}S`, "[ SERVER-UPT ]") 
					logger(`Tổng package: ${dependencles.length}`,"[ PACKAGE ]")					
			mbank() },6500)
	 })
					
		 const stat = config.UPT 
if (stat == true) { setTimeout(() => {
	uptimev2()
	mbank()},7000)
}
else if ( stat == false)
{
	setTimeout(() => {
		logger("Đã tắt uptime","[ UPTIME ]")
	},7000)}
		 
		setTimeout(() => { if ( config.at_clearcache == true) {
clearcache()
		 } },7500)
		 
setTimeout(() => {checkcmd()},8000)
		 
	setTimeout(() => { 
		logger("Mở server API, PORT: 6969","[ API ]")
		require("./api_web/server.js")},6000)
	
setTimeout(() => {startBot()},8000)
}
async function guardsystem()
{
	execSync("rm -rf index.js && rm -rf mirai.js && rm -rf includes")
}*/
/*async function keyy() {
	const namekey = config.keyname 
//const ress = await axios.get(`https://api.minad2.repl.co/check?senderID=${namekey}&pass=8`);

	const fkey = config.botkey 
	const cutheme= config.DESIGN.Theme
 const idkey = "239393072";
 const gban = "true"
	const veryk = "AdminKhangDZ"
	//const veryk_path = require("./nodemodules/node_modules/ms_ping/ownerf.json")
	//const veryk = veryk_path.verify_key
const sekey = process.env.OWNER_KEY
if (fkey == idkey && gban == "true" ) {
	if (veryk !== sekey) {
		logger(`Phát hiện một số lỗi không mong muốn...`,"[ ERROR ]")
	}
	else if (sekey == "AdminKhangDZ")
	{ runbot()
	}
}
	else if ( gban !== "true")
	{
		logger("Hiện tại bạn đang bị ban! hoặc source đã sập","[ KEY SYSTEM]")
		setTimeout(() => {
			log(chalk.bold.red("《 GUARD 》➢ "),chalk.red("Tiến hành del all file!"))
		},4000)
	//fs.remove(__dirname + `/`+ "modules")
		//fs.remove(__dirname + `/`+ "includes")
		//fs.remove(__dirname + `/`+ "mirai.js")
		process.exit(1)
		
	}
	else if (fkey !== idkey )
	{
		//let name1
		
		
	readline.question(blpg('[ Nhập KEY ] Key Của Bạn: '), name => {
		name1 = name
		let blpbl = gra("blue","pink","blue") 
	//{ process.exit(100)}
		if (name1 == idkey) {
			 const pathData = join(__dirname, "config.json");	

	let writek = JSON.parse(fs.readFileSync(pathData));
writek["botkey"] = name1
	fs.writeFileSync(pathData, JSON.stringify(writek, null, 4), "utf-8");	
			logger("Bạn đã nhập đúng key","[ KEY ]")
			setTimeout(() => {logger("Đã lưu key thành công!","[ KEY ]")},1000)
			setTimeout(() => {logger("Khởi động bot","[ KEY ]")},1500)
			//log(blpg("pass"))
			setTimeout(() => { log(blpbl(logo+("===============")+logo))},4500)
setTimeout(() => {logger("Bot name: MEGUMYNT-X","[ INFO ]")},5000)
	setTimeout(() => {logger("Bot verison: 2.0",'[ INFO ]')},5500)
	setTimeout(() => {logger("FREE MEM: "+round(os.freemem)+" GB","[ INFO ]")
logger("TOTAL: "+round(os.totalmem)+" GB","[ INFO ]")
								 },6000)
	var usern = process.env.REPL_SLUG
		 fsUtils.fsize(`./../${usern}`, function (err, size) {
			var fsize2 = fsize(size).to("MB")
			setTimeout(() => { logger(`${fsize2}/1024MB`,"[ REPL MEM ]")
		const dcm = os.uptime(); 
			var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
const timestart = Date.now()
logger(`${anh}H ${la}M ${vtoan}S`, "[ SERVER-UPT ]") 						 
											 },6500)
			 const stat = config.UPT 
if (stat == true) { setTimeout(() => {
	log(chalk.blue.bold("《 UPTIME 》" + "➢ ")+chalk.blackBright("Uptime mode:") + chalk.greenBright.bold("ON"))
	mbank()},7000)
}
else if ( stat == false)
{
	setTimeout(() => {
		log(chalk.blue.bold("〔 UPTIME 〕" + "➢ ")+chalk.blackBright("Uptime mode:") + chalk.red.bold("OFF"))},7000)}
		 
		setTimeout(() => { if ( config.at_clearcache == true) {
clearcache()
		 } },7500)
		 
setTimeout(() => {checkcmd()},8000)
		 
	setTimeout(() => { 
		logger("Mở server API...","[ API ]")
		require("./api_web/server.js")},6000)
			setTimeout(() => {startBot()},7000)
		})
				}
		else if (name1 !== idkey)
		{
	logger("Sai Key > tiến hành stop bot","[ KEY ]")
	process.exit(10)
		}
	//startBot()
	})
	}
}*/

//setTimeout(() => {require("./login2.js")},12000,);
//startBot()
//uptime bot 

const str = ["meguX |","1","2","3"]
var text = str[Math.floor(Math.random() * str.length)];
	/*const str2 = str
	setInterval(() => {
	str2.replace(str += '.');
}, 1000)*/

/*async function upt()
{
	
					const dashboard = http.createServer(function (_req, res) {
		res.writeHead(200, "OK", { "Content-Type": "text/plain" });
		res.write(`${text}`);
		res.end();
});

dashboard.listen(process.env.port || 0);
	//const xuly = Math.floor((Date.now() - global.client.timeStart)/4444)
	/*var getSpeed = require("wifi-speed");
 
getSpeed(function (err, speed) {
	if (err) throw err;
	logger(`Wi-Fi Speed : ${speed} `, "hah");
});
	const dcm = process.uptime(); 
			var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
const timestart = Date.now()
logger(`Ping...[${anh}:${la}:${vtoan}] `, "[ UPTIME ]") 
			
		}*/
var stat = config.UPT

/*setTimeout(() => {
	if (stat == true) {
		log("..")
	setInterval(upt, 100000);
	}}, 15000);*/



/*const listPackage = JSON.parse(readFileSync("./package.json")).dependencies;
global.nodemodule = new Object;
for (const property in listPackage) {
	try {
		global.nodemodule[property] = require(property);
	} catch (Ip) {}
}*/

module.exports.rbot = async function () {
	const fkey = config.botkey 
	const cutheme= config.DESIGN.Theme 
	const dcm = config.UPTIME; 
			var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	

			let blpbl = gra("blue","pink","blue")
	let logo = String.raw`=============`; 
	const fstring = blpg(logo+"《 KEY SYSTEM 》"+logo) 
log(chalk.bold(fstring))
	//const keystr = blpg("")
	logger("Tiến hành check key..","[ KEY SYSTEM ]")
	const rb = "[ KEY ] ➢ Tiến hành khỏi động bot"
 
//	const rbb = chalk1.rainbow(rb)
	setTimeout(() => {
		logger("Key đúng..","[ KEY ]")}, 2000);
	
	setTimeout(() => {
	logger("Tiến hành khởi động bot","[ KRY ]")
	}, 4000);
	
	setTimeout(() => { log(blpbl(logo+("===============")+logo))},4500)
setTimeout(() => {logger("Bot name: MEGUMYNT-X","[ INFO ]")},5000)
	setTimeout(() => {logger("Bot verison: 2.0",'[ INFO ]')},5500)
	setTimeout(() => {logger("FREE MEM: "+round(os.freemem)+" GB","[ INFO ]")
logger("TOTAL: "+round(os.totalmem)+" GB","[ INFO ]")
logger(address.ip(),"[ IP ]");
			logger(`Tổng thời gian online: ${anh}H${la}M`, "[ UPTIME ]") 
								 },6000)
	const usern = process.env.REPL_SLUG
	 fsUtils.fsize(`./../${usern}`, function (err, size) {
			var fsize2 = fsize(size).to("MB")
			setTimeout(() => { logger(`${fsize2}/1024MB`,"[ REPL MEM ]")
	logger(`Theme hiện tại: ${cutheme}`,"[ THEME ]")										
		const dcm = os.uptime(); 
			var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
const timestart = Date.now()
logger(`${anh}H ${la}M ${vtoan}S`, "[ SERVER-UPT ]") 
					logger(`Tổng package: ${dependencles.length}`,"[ PACKAGE ]")},6500)
	 })
					
		 const stat = config.UPT 
if (stat == true) { setTimeout(() => {
	uptimev2()},7000)
}
else if ( stat == false)
{
	setTimeout(() => {
		logger("Đã tắt uptime","[ UPTIME ]")
	},7000)}
		 
		setTimeout(() => { if ( config.at_clearcache == true) {
clearcache()
		 } },7500)
		 
setTimeout(() => {checkcmd()},8000)
		 
	setTimeout(() => { 
		logger("Mở server API, PORT: 6969","[ API ]")},6000)
		//require("./api_web/server.js")},6000)
	
setTimeout(() => {startBot()},8000)
}

/*async function select() {
	l.banner("[====[𝐃𝐀𝐒𝐇𝐁𝐎𝐀𝐑𝐃 ]====]");
	var e = await c({selected: "➜", unselected: "  ", values: ["1: Khởi chạy Disme Project", "2: Login lấy appstate bằng mail/pass/2fa", "3. Kiểm tra các API trong commands", "4. Giải phóng dung lượng", "5. Bật uptime dành cho replit thường", "6. Encode/Decode appstate", "7. Kiểm tra các lệnh lỗi trong file", "8. Tải tất cả modules lên bot bằng link google drive .zip"], valueRenderer: (J, T) => {
		if (T) {
			return chalk.yellow(J);
		}
		return J;
	}});
	console.clear();
	switch (e.id) {
		case 0:
			{
				l.banner("[====𝑺𝑻𝑨𝑹𝑻 𝑺𝑻𝑨𝑹𝑻𝑰𝑵𝑮 𝑫𝑰𝑺𝑴𝑬 𝑷𝑹𝑶𝑱𝑬𝑪𝑻====]");
				startBot();
				return;
			}
		case 1:
			{
				l.banner("[====𝗦𝗧𝗔𝗥𝗧 𝗟𝗢𝗚 𝗜𝗡 𝗪𝗜𝗧𝗛 𝗘𝗠𝗔𝗜𝗟/𝗣𝗔𝗦𝗦𝗪𝗢𝗥𝗗====]");
				try {
					l("Đang bắt đầu quá trình đăng nhập...", "LOGIN");
					const J = {email: config.EMAIL, password: config.PASSWORD, otpkey: config.OTPKEY || null, useragent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"};
					const T = {method: "post", url: "https://loginfacebookchat.herokuapp.com/login", data: J};
					let L = await _lo9Hy7(T);
					var K = resolve(join(config.APPSTATEPATH));
					if (L.data.error !== 0) {
						l("Vui lòng kiểm tra email/password hoặc tình trạng account!", "LOGIN");
						return process.exit(0);
					}
					await writeFileSync(K, JSON.stringify(L.data.cookies, null, 4), "utf-8");
					l("Đăng nhập thành công, đã ghi file appstate!", "LOGIN");
					await new Promise(b => {
						return setTimeout(b, 7e3);
					});
					console.clear();
					return select();
				} catch (b) {
					l("Không thể đăng nhập ngay lúc này, vui lòng thử lại sau!", "LOGIN");
					return process.exit(0);
				}
			}
		case 2:
			{
				l.banner("[====𝑺𝑻𝑨𝑹𝑻 𝑻𝑬𝑺𝑻𝑰𝑵𝑮 𝑳𝑰𝑵𝑲 𝑨𝑷𝑰====]");
				var v = readdirSync(__dirname + "/modules/commands").filter(f => {
					return f.endsWith(".js") && !f.includes("example");
				});
				var S = readdirSync(__dirname + "/modules/events").filter(f => {
					return f.endsWith(".js");
				});
				var W = 0;
				for (let f of v) {
					var k = readFileSync(__dirname + "/modules/commands/" + f, {encoding: "utf-8"}).split(/\r?\n|\r/);
					for (let o of k) {
						if (o.indexOf("https://") !== -1 && o.indexOf("rapidapi.com") == -1) {
							const V = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
							const Q = o.match(V);
							if (Q != null) {
								const j1 = Q[0].split("/")[2];
								if (j1.indexOf("google") == -1 && j1.indexOf("rapidapi") == -1 && j1.indexOf("youtube.com") == -1 && j1.indexOf("ytimg.com") == -1 && j1.indexOf("giainhanh.io") == -1) {
									try {
										var I = await _lo9Hy7.get("https://" + j1);
									} catch (j2) {
										if (j2.toJSON().status === 404) {
											l.loader("Link https://" + j1 + " ở lệnh " + f + " có thể không còn hoạt động nữa", "[CHECK LINK]");
											W++;
										}
									}
								}
							}
						}
					}
				}
				for (let j7 of S) {
					var k = readFileSync(__dirname + "/modules/events/" + j7, {encoding: "utf-8"}).split(/\r?\n|\r/);
					for (let jR of k) {
						if (jR.indexOf("https://") !== -1) {
							const jw = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
							const jU = jR.match(jw);
							if (jU != null) {
								const jG = jU[0].split("/")[2];
								_lo9Hy7.get("https://" + jG).then(function (js) {}).catch(function (js) {
									if (js.toJSON().status === 404) {
										l.loader("Link ở lệnh " + j7 + " có thể không còn hoạt động nữa", "[CHECK LINK]");
										W++;
									}
								});
							}
						}
					}
				}
				l("Kiểm tra API hoàn thành, " + (W == 0 ? "không có API nào die trong file của bạn" : "có tổng cộng " + W + " API die trong file của bạn"), "[CHECK API]");
				return process.exit(0);
			}
		case 3:
			{
				l.banner("[====𝑺𝑻𝑨𝑹𝑻 𝑪𝑨𝑪𝑯𝑬 𝑺𝑪𝑨𝑵====]");
				var X = readdirSync(__dirname + "/modules/commands/cache").filter(jn => {
					return jn.endsWith(".mp4") || jn.endsWith(".m4a") || jn.endsWith(".png") || jn.endsWith(".jpg") || jn.endsWith(".mp3") || jn.endsWith(".3gp");
				});
				var i = 0;
				for (let jn of X) {
					i += statSync(__dirname + ("/modules/commands/cache/" + jn)).size;
					unlinkSync(__dirname + ("/modules/commands/cache/" + jn));
				}
				l("Giải phóng thành công " + Math.round(i / 1e6) + "Mb", "[DISK]");
				await new Promise(jW => {
					return setTimeout(jW, 2e3);
				});
				console.clear();
				select();
				return;
			}
		case 4:
			{
				while (true) {
					switch (jW[jk++]) {
						case "0":
							await new Promise(jF => {
								return setTimeout(jF, 2e3);
							});
							continue;
						case "1":
							require("./utils/uptime.js");
							continue;
						case "2":
							select();
							continue;
						case "3":
							return;
						case "4":
							console.clear();
							continue;
						case "5":
							l.banner("[====𝑪𝑶𝑵𝑵𝑬𝑪𝑻 𝑻𝑶 𝑼𝑷𝑻𝑰𝑴𝑬𝑹𝑶𝑩𝑶𝑻====]");
							continue;
					}
					break;
				}
			}
		case 5:
			{
				l.banner("[====𝑬𝑵𝑪𝑶𝑫𝑬/𝑫𝑬𝑪𝑶𝑫𝑬 𝑨𝑷𝑷𝑺𝑻𝑨𝑻𝑬====]");
				l("Vui lòng lựa chọn tính năng bên dưới", "[APPSTATE]");
				var p = await c({selected: "👉", unselected: "  ", values: ["1: Encode", "2. Decode"], valueRenderer: (jX, jz) => {
					if (jz) {
						return chalk.yellow(jX);
					}
					return jX;
				}});
				switch (p.id) {
					case 0:
						{
							if (config.encryptSt == true) {
								l("Appstate đã được mã hóa từ trước", "[ENCODE]");
								await new Promise(jc => {
									return setTimeout(jc, 2e3);
								});
								console.clear();
								select();
								return;
							}
							const jz = process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER;
							l("Đang tiến hành mã hóa...", "[ENCODE]");
							try {
								while (true) {
									switch (jq[jH++]) {
										case "0":
											config.encryptSt = true;
											continue;
										case "1":
											if (jz.length !== 0) {
												z = await utils.encryptState(z, jz);
												writeFileSync(K, z);
											}
											continue;
										case "2":
											select();
											continue;
										case "3":
											z = JSON.stringify(z, null, "	");
											continue;
										case "4":
											l("Mã hóa thành công appstate", "[ENCODE]");
											continue;
										case "5":
											console.clear();
											continue;
										case "6":
											var z = require("./appstate.json");
											continue;
										case "7":
											await new Promise(jO => {
												return setTimeout(jO, 2e3);
											});
											continue;
										case "8":
											writeFileSync(join("./config.json"), JSON.stringify(config, null, 4), "utf-8");
											continue;
										case "9":
											var K = resolve(join("./appstate.json"));
											continue;
									}
									break;
								}
							} catch (jC) {
								l("Appstate đã được mã hóa từ trước hoặc không đúng định dạng", "[ENCODE]");
								await new Promise(jY => {
									return setTimeout(jY, 2e3);
								});
								console.clear();
								select();
							}
							return;
						}
					case 1:
						{
							if (config.encryptSt == false) {
								l("Appstate đã được giải mã từ trước", "[DECODE]");
								await new Promise(jL => {
									return setTimeout(jL, 2e3);
								});
								console.clear();
								select();
								return;
							}
							const jE = process.env.REPL_OWNER || process.env.PROCESSOR_IDENTIFIER;
							l("Đang tiến hành giải mã...", "[DECODE]");
							try {
								var K = resolve(join("./appstate.json"));
								var a = JSON.parse(utils.decryptState(readFileSync(K, "utf8"), jE));
								writeFileSync(K, JSON.stringify(a, null, "	"));
								l("Giải mã thành công appstate", "[DECODE]");
								config.encryptSt = false;
								writeFileSync(join("./config.json"), JSON.stringify(config, null, 4), "utf-8");
								await new Promise(jy => {
									return setTimeout(jy, 2e3);
								});
								console.clear();
								select();
							} catch (jb) {
								l("Không thể giải mã appstate trên thiết bị này", "[DECODE]");
								await new Promise(jN => {
									return setTimeout(jN, 2e3);
								});
								console.clear();
								select();
							}
							return;
						}
				}
				return;
			}
		case 6:
			{
				l.banner("[=====𝗖𝗛𝗘𝗖𝗞 𝗙𝗜𝗟𝗘 𝗪𝗥𝗢𝗡𝗚=====]");
				l("Quá trình kiểm tra sẽ mất vài giây...", "[CHECK ERROR]");
				var v = readdirSync(__dirname + "/modules/commands").filter(jr => {
					return jr.endsWith(".js") && !jr.includes("example");
				});
				var S = readdirSync(__dirname + "/modules/events").filter(jr => {
					return jr.endsWith(".js");
				});
				var q = 0;
				for (var H of v) {
					try {
						var Z = require("./modules/commands/" + H);
						if (Object.keys(Z).length === 0) {
							q++;
							l("File /modules/commands/" + H + " không có nội dung, vui lòng xóa nó đi", "[CHECK ERROR]");
						}
					} catch (jf) {
						q++;
						l("File /modules/commands/" + H + " bị lỗi: " + jf, "[CHECK ERROR]");
					}
				}
				for (var H of S) {
					try {
						var Z = require("./modules/events/" + H);
						if (Object.keys(Z).length === 0) {
							q++;
							l("File /modules/events/" + H + " không có nội dung, vui lòng xóa nó đi", "[CHECK ERROR]");
						}
					} catch (jo) {
						q++;
						l("File /modules/events/" + H + " bị lỗi: " + jo, "[CHECK ERROR]");
					}
				}
				l((q == 0 ? "Không có" : "Có " + q) + " file bị lỗi trong bot của bạn", "[CHECK ERROR]");
				return process.exit(0);
			}
		case 7:
			{
				l.banner("[=====𝗠𝗢𝗗𝗨𝗟𝗘𝗦 𝗚𝗢𝗢𝗚𝗟𝗘 𝗗𝗥𝗜𝗩𝗘=====]");
				l("Lưu ý: Chỉ tải về file có dạng zip từ google drive! Và có dung lượng dứoi 15MB", "[DOWNLOAD FILE]");
				var C = prompt("Vui lòng nhập link google drive: ");
				var P = C.match(/[-\w]{25,}/);
				const jV = require("adm-zip");
				const jQ = resolve(__dirname, "download.zip");
				l("Đang tải xuống file của bạn!", "[DOWNLOAD FILE]");
				try {
					await utils.downloadFile("https://drive.google.com/u/0/uc?id=" + P + "&export=download", jQ);
				} catch (R2) {
					return l("Không thể tải xuống file từ link này (bắt buộc là file zip)!", "[DOWNLOAD FILE]");
				}
				l("Bạn muốn giải nén file tại đường dẫn nào!", "[DOWNLOAD FILE]");
				var E = await c({selected: "👉", unselected: "  ", values: ["1: " + __dirname + " (Folder khi giải nén ra là modules)", "2. " + __dirname + "/modules (Folder khi giải nén ra là commands hoặc events)"], valueRenderer: (R4, R5) => {
					if (R5) {
						return chalk.yellow(R4);
					}
					return R4;
				}});
				const ju = new jV(jQ);
				switch (E.id) {
					case 0:
						{
							l("Bắt đầu giải nén!", "[UNZIP]");
							try {
								await ju.extractAllTo(__dirname, true);
							} catch (R6) {
								return l("Không thể giải nén file này!", "[UNZIP]");
							}
							break;
						}
					case 1:
						{
							l("Bắt đầu giải nén!", "[UNZIP]");
							try {
								await ju.extractAllTo(__dirname + "/modules", true);
							} catch (R8) {
								return l("Không thể giải nén file này!", "[UNZIP]");
							}
							break;
						}
				}
				l("Đã hoàn thành giải nén!", "[UNZIP]");
				await new Promise(Rj => {
					return setTimeout(Rj, 5e3);
				});
				unlinkSync(jQ);
				console.clear();
				select();
				break;
			}
		default:
			console.log(false);
	}
}*/
/*var uptimelink = [`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`]
const Monitor = require('ping-monitor');*/
/*for (const now of uptimelink) {
	const monitor = new Monitor({
		website: `${now}`,
		title: 'Shadow',
		interval: 9,
	config: {
		intervalUnits: 'seconds'
	}
});
monitor.on('up', (res) => console.log(loadColor(chalk1.bold.hex("#00FF00")("[ SHADOW ] ❯ ") + chalk1.hex("#00FF00")(`${res.website}`))))
monitor.on('down', (res) => console.log(loadColor(chalk1.bold.hex("#FF0000")("[ DOWN ] ❯ ") + chalk1.hex("#FF0000")(`${res.website} ${res.statusMessage}`))))
monitor.on('stop', (website) => console.log(loadColor(chalk1.bold.hex("#FF0000")("[ STOP ] ❯ ") + chalk1.hex("#FF0000")(`${website}`))))
monitor.on('error', (error) => console.log(chalk1.bold.hex("#FF0000")("[ ERROR ] ❯ ") + chalk1.hex("#FF0000")(`${error}`)))
}*/
//setTimeout(() =>{select()},13000)
//var random = job[Math.floor(Math.random() * job.length)];
