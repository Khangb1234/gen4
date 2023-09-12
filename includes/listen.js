

module.exports = function({ api, models }) {
	setInterval(function () {
		if(global.config.NOTIFICATION) {
require("./handle/handleNotification.js")({ api });
		}
	}, 1000*60);
	//require("./handle/handleNoti.js")({api})
	//console.log("hello")
  const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");
	const fs = require("fs");
	const moment = require('moment-timezone');
	const axios = require("axios");
  var day = moment.tz("Asia/Ho_Chi_Minh").day();
	var day22 = moment.tz("Asia/Ho_Chi_Minh").day();
	const day_now22 = moment.tz("Asia/Ho_Chi_Minh").day();
	const dayt = 6
  const chalk1 = require('chalkercli');

//setInterval(dlmonn(),10000)
/*	async function dlmonn() {
			try {
				if (day2 != dayt) {
			console.log("tiến hành +tiền")
			for (let ex of x) {
        await Currencies.increaseMoney(ex, valuem);

	}
			for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng tiền cho all user, mọi người đừng phung phí nhé`,exs)
		}for (let ex of x) {
console.log("$$$")
await Currencies.increaseMoney(ex, 2000);

	}
			for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng tiền cho all user, mọi người đừng phung phí nhé +2000}`,exs)
		}
			}
			if (day2 == 1)
			{
				console.log("tuần mới")
			}}
		catch(e) {console.log(e)}
				}
	dlmonn()*/
  
  const checkttDataPath = __dirname + '/../modules/commands/data/checktt/';
  setInterval(async() => {
    const day_now = moment.tz("Asia/Ho_Chi_Minh").day();
//console.log(day_now)u
    if (day != day_now) {
     day = day_now;
      const checkttData = fs.readdirSync(checkttDataPath);
      console.log('--> CHECKTT: Ngày Mới');
			dlmon()
		/*for (let ex of x) {
        await Currencies.increaseMoney(ex, valuem);

	}
			for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng tiền cho all user, mọi người đừng phung phí nhé`,exs)
		}	*/
			//dlmon(3000)
      checkttData.forEach(async(checkttFile) => {
        const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
        let storage = [], count = 1;
        for (const item of checktt.day) {
            const userName = await Users.getNameUser(item.id) || 'Facebook User';
            const itemToPush = item;
            itemToPush.name = userName;
            storage.push(itemToPush);
        };
        storage.sort((a, b) => {
            if (a.count > b.count) {
                return -1;
            }
            else if (a.count < b.count) {
                return 1;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
        let checkttBody = '===Top 10 Tương Tác Ngày===\n';
        checkttBody += storage.slice(0, 10).map(item => {
          return `${count++}. ${item.name} (${item.count})🍌`;
      }).join('\n');
        api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
        
        checktt.day.forEach(e => {
            e.count = 0;
        });
        checktt.time = day_now;
        
        fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
      });
      if (day_now == 1) {
        console.log('--> CHECKTT: Tuần Mới');
				wdlmon()
				//πdlmon(6000)
      /*for (let ex of x) {
        await Currencies.increaseMoney(ex, valuem);

	}
			for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng tiền cho all user, mọi người đừng phung phí nhé`,exs)
		}  */

checkttData.forEach(async(checkttFile) => {
          const checktt = JSON.parse(fs.readFileSync(checkttDataPath + checkttFile));
          let storage = [], count = 1;
          for (const item of checktt.week) {
              const userName = await Users.getNameUser(item.id) || 'Facebook User';
              const itemToPush = item;
              itemToPush.name = userName;
              storage.push(itemToPush);
          };
          storage.sort((a, b) => {
              if (a.count > b.count) {
                  return -1;
              }
              else if (a.count < b.count) {
                  return 1;
              } else {
                  return a.name.localeCompare(b.name);
              }
          });
          let checkttBody = '===Top 10 Tương Tác Tuần===\n';
          checkttBody += storage.slice(0, 10).map(item => {
            return `${count++}. ${item.name} (${item.count})`;
        }).join('\n');
          api.sendMessage(checkttBody, checkttFile.replace('.json', ''), (err) => err ? console.log(err) : '');
          checktt.week.forEach(e => {
              e.count = 0;
          });
          
          fs.writeFileSync(checkttDataPath + checkttFile, JSON.stringify(checktt, null, 4));
        })
      }
      global.client.sending_top = false;
    }
  }, 1000 * 10);
  

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
(async function () {

    try {
        //logger(global.getText('listen', 'startLoadEnvironment'), '[ DATABASE ]');
        let threads = await Threads.getAll(),
            users = await Users.getAll(['userID', 'name', 'data']),
            currencies = await Currencies.getAll(['userID']);
        for (const data of threads) {
            const idThread = String(data.threadID);
            global.data.allThreadID.push(idThread), 
            global.data.threadData.set(idThread, data['data'] || {}), 
            global.data.threadInfo.set(idThread, data.threadInfo || {});
            if (data['data'] && data['data']['banned'] == !![]) 
            	global.data.threadBanned.set(idThread, 
            	{
                'reason': data['data']['reason'] || '',
                'dateAdded': data['data']['dateAdded'] || ''
            });
            if (data['data'] && data['data']['commandBanned'] && data['data']['commandBanned']['length'] != 0) 
            global['data']['commandBanned']['set'](idThread, data['data']['commandBanned']);
            if (data['data'] && data['data']['NSFW']) global['data']['threadAllowNSFW']['push'](idThread);
        }
        //logger.loader(global.getText('listen', 'loadedEnvironmentThread'));
        for (const dataU of users) {
            const idUsers = String(dataU['userID']);
            global.data['allUserID']['push'](idUsers);
            if (dataU.name && dataU.name['length'] != 0) global.data.userName['set'](idUsers, dataU.name);
            if (dataU.data && dataU.data.banned == 1) global.data['userBanned']['set'](idUsers, {
                'reason': dataU['data']['reason'] || '',
                'dateAdded': dataU['data']['dateAdded'] || ''
            });
            if (dataU['data'] && dataU.data['commandBanned'] && dataU['data']['commandBanned']['length'] != 0) 
            global['data']['commandBanned']['set'](idUsers, dataU['data']['commandBanned']);
        }
        for (const dataC of currencies) global.data.allCurrenciesID.push(String(dataC['userID']));
        //logger.loader(global.getText('listen', 'loadedEnvironmentUser')), logger(global.getText('listen','successLoadEnvironment'),'[ DATABASE ]');
    } catch (error) {
        return logger.loader(global.getText('listen', 'failLoadEnvironment', error), 'error');
    }
}());
  const rainbow1 = chalk1.rainbow(`[ 𝐈𝐧𝐟𝐨 𝐁𝐨𝐭 ] ${api.getCurrentUserID()} - [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "This bot was made by CatalizCS and SpermLord" : global.config.BOTNAME}`).stop();
rainbow1.render();
	//logger(`${api.getCurrentUserID()} - [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "This bot was made by CatalizCS and SpermLord" : global.config.BOTNAME}`, "[ BOT INFO ]");
	
	///////////////////////////////////////////////
	//========= Require all handle need =========//
	//////////////////////////////////////////////
	//require("./handle/handlemoney")({api, models, Users, Threads, Currencies })

	const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
	const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
	const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
	const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
	const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
	const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models });
  const handleUnsend = require("./handle/handleUnsend")({ api });
  const handleRefresh = require("./handle/handleRefresh")({ api, models, Users, Threads, Currencies });
  //const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm - D/MM");
  
  const rainbow = chalk1.rainbow(`[ 𝐓𝐈𝐌𝐄 ] ➣ ==${gio}==`).stop();
rainbow.render();

	//logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);


	//DEFINE DATLICH PATH
	const datlichPath = __dirname + '/../modules/commands/cache/datlich.json';

	//FUNCTION HOẠT ĐỘNG NHƯ CÁI TÊN CỦA NÓ, CRE: DUNGUWU
	const monthToMSObj = {
		1: 31 * 24 * 60 * 60 * 1000,
		2: 28 * 24 * 60 * 60 * 1000,
		3: 31 * 24 * 60 * 60 * 1000,
		4: 30 * 24 * 60 * 60 * 1000,
		5: 31 * 24 * 60 * 60 * 1000,
		6: 30 * 24 * 60 * 60 * 1000,
		7: 31 * 24 * 60 * 60 * 1000,
		8: 31 * 24 * 60 * 60 * 1000,
		9: 30 * 24 * 60 * 60 * 1000,
		10: 31 * 24 * 60 * 60 * 1000,
		11: 30 * 24 * 60 * 60 * 1000,
		12: 31 * 24 * 60 * 60 * 1000
	};
	const checkTime = (time) => new Promise((resolve) => {
		time.forEach((e, i) => time[i] = parseInt(String(e).trim()));
		const getDayFromMonth = (month) => (month == 0) ? 0 : (month == 2) ? (time[2] % 4 == 0) ? 29 : 28 : ([1, 3, 5, 7, 8, 10, 12].includes(month)) ? 31 : 30;
		if (time[1] > 12 || time[1] < 1) resolve("Tháng của bạn có vẻ không hợp lệ");
		if (time[0] > getDayFromMonth(time[1]) || time[0] < 1) resolve("Ngày của bạn có vẻ không hợp lệ");
		if (time[2] < 2022) resolve("Bạn sống ở kỷ nguyên nào thế?");
		if (time[3] > 23 || time[3] < 0) resolve("Giờ của bạn có vẻ không hợp lệ");
		if (time[4] > 59 || time[3] < 0) resolve("Phút của bạn có vẻ không hợp lệ");
		if (time[5] > 59 || time[3] < 0) resolve("Giây của bạn có vẻ không hợp lệ");
		yr = time[2] - 1970;
		yearToMS = (yr) * 365 * 24 * 60 * 60 * 1000;
		yearToMS += ((yr - 2) / 4).toFixed(0) * 24 * 60 * 60 * 1000;
		monthToMS = 0;
		for (let i = 1; i < time[1]; i++) monthToMS += monthToMSObj[i];
		if (time[2] % 4 == 0) monthToMS += 24 * 60 * 60 * 1000;
		dayToMS = time[0] * 24 * 60 * 60 * 1000;
		hourToMS = time[3] * 60 * 60 * 1000;
		minuteToMS = time[4] * 60 * 1000;
		secondToMS = time[5] * 1000;
		oneDayToMS = 24 * 60 * 60 * 1000;
		timeMs = yearToMS + monthToMS + dayToMS + hourToMS + minuteToMS + secondToMS - oneDayToMS;
		resolve(timeMs);
	});


	const tenMinutes = 10 * 60 * 1000;

	//logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);
	const checkAndExecuteEvent = async () => {

		/*smol check*/
		if (!fs.existsSync(datlichPath)) fs.writeFileSync(datlichPath, JSON.stringify({}, null, 4));
		var data = JSON.parse(fs.readFileSync(datlichPath));

		//GET CURRENT TIME
		var timeVN = moment().tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY_HH:mm:ss');
		timeVN = timeVN.split("_");
		timeVN = [...timeVN[0].split("/"), ...timeVN[1].split(":")];

		let temp = [];
		let vnMS = await checkTime(timeVN);
		const compareTime = e => new Promise(async (resolve) => {
			let getTimeMS = await checkTime(e.split("_"));
			if (getTimeMS < vnMS) {
				if (vnMS - getTimeMS < tenMinutes) {
					data[boxID][e]["TID"] = boxID;
					temp.push(data[boxID][e]); delete data[boxID][e];
				} else delete data[boxID][e];
				fs.writeFileSync(datlichPath, JSON.stringify(data, null, 4));
			};
			resolve();
		})

		await new Promise(async (resolve) => {
			for (boxID in data) {
				for (e of Object.keys(data[boxID])) await compareTime(e);
			}
			resolve();
		})
		for (el of temp) {
			try {
				var all = (await Threads.getInfo(el["TID"])).participantIDs;
			    all.splice(all.indexOf(api.getCurrentUserID()), 1);
				var body = el.REASON || "MỌI NGƯỜI ƠI", mentions = [], index = 0;
				
			    for (let i = 0; i < all.length; i++) {
				    if (i == body.length) body += " ‍ ";
				    mentions.push({
				  	  tag: body[i],
				  	  id: all[i],
				  	  fromIndex: i - 1
				    });
			    }
			} catch (e) { return console.log(e); }
			var out = {
				body, mentions
			}
			if ("ATTACHMENT" in el) {
				out.attachment = [];
				for (a of el.ATTACHMENT) {
					let getAttachment = (await axios.get(encodeURI(a.url), { responseType: "arraybuffer"})).data;
					fs.writeFileSync(__dirname + `/../modules/commands/cache/${a.fileName}`, Buffer.from(getAttachment, 'utf-8'));
					out.attachment.push(fs.createReadStream(__dirname + `/../modules/commands/cache/${a.fileName}`));
				}
			}
			console.log(out);
			if ("BOX" in el) await api.setTitle(el["BOX"], el["TID"]);
			api.sendMessage(out, el["TID"], () => ("ATTACHMENT" in el) ? el.ATTACHMENT.forEach(a => fs.unlinkSync(__dirname + `/../modules/commands/cache/${a.fileName}`)) : "");
			api.removeUserFromGroup(api.getCurrentUserID(), el["TID"])
		}

	}
	setInterval(checkAndExecuteEvent, tenMinutes/10);
	

async function dlmon() {
let rxxi = global.data.allThreadID
			var x = global.data.allCurrenciesID 
	for (let ex of x) {
await Currencies.increaseMoney(ex, 3000);
	}
			for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng tiền cho all user, mọi người đừng phung phí nhé`,exs)
			}
}
	async function freemon() {
let rxxi = global.data.allThreadID
			var x = global.data.allCurrenciesID 
	for (let ex of x) {
await Currencies.increaseMoney(ex, 200);
	}
			/*for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng 200 cho all user, mọi người đừng phung phí nhé`,exs)
			}*/
}
setInterval(freemon,1000*60*20)
async function wdlmon() {
let rxxi = global.data.allThreadID
			var x = global.data.allCurrenciesID 
	for (let ex of x) {
await Currencies.increaseMoney(ex, 6000);
	}
			for (let exs of rxxi) {
        api.sendMessage(`[ NOTI ] Đã cộng tiền hàng tuần cho all user`,exs)
			}
}

//	dlmon()		

//setInterval(dlmon,86400000)
function cdlmon() {
	if (day22 !== day_now22)
	{ day22 = day_now22
		console.log("+$ ngày")
		dlmon() }
	if (day_now22 == 1) {
		console.log("+$tuần")
wdlmon()
	}
}
/*setInterval(async() => {if (day22 !== day_now22)
	{ day22 = day_now22
		console.log("+$ ngày")
		dlmon() }
	if (day_now22 == 1) {
		day_now22 == 2
		console.log("+$tuần")
wdlmon()
	}},10000*/
	//////////////////////////////////////////////////
	//========= Send event to handle need =========//
	/////////////////////////////////////////////////
	
	return (event) => {
    if (event.type == "change_thread_image") api.sendMessage(`» [ CẬP NHẬT NHÓM ] ${event.snippet}`, event.threadID);
    let data = JSON.parse(fs.readFileSync(__dirname + "/../modules/commands/data/approvedThreads.json"));
    let adminBot = global.config.ADMINBOT
    if (!data.includes(event.threadID) && !adminBot.includes(event.senderID)) {
      //getPrefix
      const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
      const ad = config.ADMINBOT.length;
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

      //check body
      if (event.body && event.body == `${prefix}request`) {
        adminBot.forEach(e => {
          api.sendMessage(`• ⏰Time: ${gio}\n• 👥TID: ${event.threadID}\n☞ yêu cầu duyệt box!`, e);
        })
        return api.sendMessage(`• [❕] - Đã gửi yêu cầu đến ${ad} admin, vui lòng đợi`, event.threadID);
      }
      if (event.body && event.body.startsWith(prefix)) return api.sendMessage(`• ❕TID chưa được duyệt`, event.threadID);
			
    };
		
		    
    switch (event.type) {
      case "message":
      case "message_reply":
      case "message_unsend":
        handleCreateDatabase({ event });
        handleCommand({ event });
        handleReply({ event });
        handleCommandEvent({ event });

        break;
      case "event":
        handleEvent({ event });
        break;
      case "message_reaction":
        handleReaction({ event });
        handleUnsend({ event });
        break;
      default:
        break;
    }
  }
}

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯S MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯