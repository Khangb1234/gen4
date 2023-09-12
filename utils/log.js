const chalk = require('chalk');
const gradient = require("gradient-string")

const con = require('./../config.json');
const theme = con.DESIGN.Theme;
let co;
let cra;
let error;
if (theme == 'blue') {
  co = gradient("#243aff", "#4687f0", "#5800d4");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'fiery') {
  co = gradient("#fc2803", "#fc6f03", "#fcba03");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'red') {
  co = gradient("red", "orange");
  error = chalk.red.bold;
} else if (theme.toLowerCase() === 'aqua') {
  co = gradient("#0030ff", "#4e6cf2");
  error = chalk.blueBright;
} else if (theme.toLowerCase() === 'pink') {
  cra = gradient('purple', 'pink');
  co = gradient("#d94fff", "purple");
} else if (theme.toLowerCase() === 'retro') {
  cra = gradient("#d94fff", "purple");
  co = gradient.retro;
} else if (theme.toLowerCase() === 'sunlight') {
  cra = gradient("#f5bd31", "#f5e131");
  co = gradient("orange", "#ffff00", "#ffe600");
} else if (theme.toLowerCase() === 'teen') {
  cra = gradient("#00a9c7", "#853858");
  co = gradient.teen;
} else if (theme.toLowerCase() === 'summer') {
  cra = gradient("#fcff4d", "#4de1ff");
  co = gradient.summer;
} else if (theme.toLowerCase() === 'flower') {
  cra = gradient("blue", "purple", "yellow", "#81ff6e");
  co = gradient.pastel;
}
else if (theme == "emerald")
{
	cra = gradient({color:"#10a318",pos:0.2},{color:"#10a318",pos:0.4});
	co = gradient({color:"#10a318",pos:0.1},{color:"#56f05e ",pos:0.4},{color:"#10a318",pos:0.6},{color:"#56f05e",pos:0.7},{color:"#10a318",pos:1})
}
else if (theme=="dream") 
{
	cra = gradient("blue","pink") 
	co = gradient("#a200ff","#21b5ff","#a200ff")
}
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000").bold('[ Error ] »') + data);
     break;
		default:			        
      var job = ["#FFA500","#FFFF00","#00FF00","#0000FF", "#4B0082","#A020F0"];
    var random = 
job[Math.floor(Math.random() * job.length)];	
			console.log(chalk.bold(co(`${option} ➢ `)) +co(data))

			//console.log(chalk.bold.hex(random).bold(`${option} ➢ `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {   
		case "success":
			console.log(chalk.bold.hex("#00FF00").bold('[ MEGU-X ] ❯ ') + data);
			break;
		case "warn":
			console.log(chalk.bold.hex("#FF0000").bold('[ Dark Rulex ] ❯ ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000").bold('[ MEGU-X ] ➢ ') + data);
			break;
		default:
      var job = ["#FFA500","#FFFF00","#00FF00","#0000FF", "#4B0082","#A020F0"];
    var random = 
job[Math.floor(Math.random() * job.length)];
			var random2 = 
job[Math.floor(Math.random() * job.length)];
			let rdgra = gradient(`${random}`,`${random2}`)  ;
			const fisrt = rdgra("[ MEGU-X ] ➢ ");
				console.log(chalk.bold(co("[ MEGU-X] ➢ ")) +co(data))
		//	console.log(chalk.bold(fisrt) + co(data))
//console.log(rdgra(`[ MEGU-X ] ➢ `+data))
			//console.log(chalk.bold.hex(random).bold(`[ MEGU-X ] ➢ `) + data);
			break;
	}
	}
module.exports.banner = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(co(data));
}
module.exports.bold = (data) => {
	const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
	const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
	console.log(chalk.bold(co(data)))
}