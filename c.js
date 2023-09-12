const { spawn } = require('child_process');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');
const path = require("path");
const chalk = require('chalk');
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rb = require("./bruh.js")
function randomColor() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    } 
   return "#" + color;
};
const app = express();
/*app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});*/
/*(async () => {
  app.listen(process.env.PORT || 80);
})();*/
module.exports.getapp = function () {
console.log(chalk.bold.hex(randomColor()).bold(`[ LOGIN ] » Đang tiến hành đăng nhập...`));
setTimeout(() => {
  console.log(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Tiến hành đăng nhập tại:'));
  const appstateFilePath = path.join(__dirname, 'appstate.json');

fs.readFile('acc.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const config = require("./config.json");
  const mail = config.EMAIL;
  const password = config.PASSWORD;
	const twofa = config.OTPKEY;
  console.log(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Email:', mail));
  console.log(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Password:', password));

    const apiURL = `https://api-port2.haimothaihai.repl.co/getappstate?username=${mail}&password=${password}&_2fa=${twofa}`;

    axios.get(apiURL)
      .then(response => {
        const responseData = response.data;
        const getapps = response.data.data || "Không thể lấy được appstate vui lòng kiểm tra lại tài khoản"
        console.log(chalk.bold.hex(randomColor()).bold("[ LOGIN ] » \n",getapps));
        fs.writeFile(appstateFilePath, JSON.stringify(responseData.data.session_cookies), 'utf8', (err) => {
          if (err) {
            console.error(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Đã xảy ra lỗi khi ghi file appstate.json:', err));
            return;
          }
          console.log(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Đã ghi thành công appstate vào file appstate.json'));
        });
        console.log(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Chế độ:', response.data.status));
        console.log(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Tình trạng:', response.data.message));
				console.log(chalk.bold.hex(randomColor()).bold('[ SYSTEM ] » Tiến hành start bot', response.data.message)); 
				setTimeout(() => {console.clear()},3000)
	setTimeout(() => {rb.rbot()},4000); 
      })
      .catch(error => { return  console.error(chalk.bold.hex(randomColor()).bold('[ LOGIN ] » Đã xảy ra lỗi vui lòng xem tại tài khoản hoặc xem lại api\nLỗi là:', error).then(process.exit(0)));
      });
  });
}, 2000);
	
}