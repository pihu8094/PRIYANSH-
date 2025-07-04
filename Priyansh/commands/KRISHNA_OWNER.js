 const fs = require("fs");
module.exports.config = {
	name: "Arun",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Owner") || 
react.includes("OWNER")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐊𝐫𝐢𝐬𝐡𝐧𝐚 𝐁𝐚𝐛𝐮✦\n\n \n𝗟𝗜𝗡𝗞 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 \n 𝗠𝗥. 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗕𝗔𝗕𝗨 😋https://www.facebook.com/profile.php?id=61573328623221`",attachment: fs.createReadStream(__dirname + `/noprefix/krishna.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️‍🔥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
