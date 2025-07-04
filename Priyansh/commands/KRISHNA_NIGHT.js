const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "good-night",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "ARYAN",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/r0MdS3I.gif",
                "https://i.imgur.com/5AAHyuj.gif",
                "https://i.imgur.com/rgOqZrQ.gif",
                "https://i.imgur.com/oI3aoAp.gif",
                "https://i.imgur.com/OaCJwP3.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯v̸ɘr᩶i͠ 𝗴❍❍ɗ ɳi͠𝗴ɧ𝗧",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯v̸ɘr᩶i͠ 𝗴❍❍ɗ ɳi͠𝗴ɧ𝗧",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯v̸ɘr᩶i͠ 𝗴❍❍ɗ ɳi͠𝗴ɧ𝗧",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯v̸ɘr᩶i͠ 𝗴❍❍ɗ ɳi͠𝗴ɧ𝗧",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐༒𓆩𝙺𝚁𝙸𝚂𝙷𝙽𝙰✯𝙱𝙰𝙱𝚄𓆪༒💐\n──────────────────\n\n🩷 🖤⎯꯭֯🌸⃪ ꯭⃛֯v̸ɘr᩶i͠ 𝗴❍❍ɗ ɳi͠𝗴ɧ𝗧"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("gn") || 
                                event.body.toLowerCase().startsWith("Gn") || 
                                event.body.toLowerCase().startsWith("GN") || 
                                event.body.toLowerCase().startsWith("good night") || 
                                event.body.toLowerCase().startsWith("Good night") || 
                                event.body.toLowerCase().startsWith("GOOD NIGHT") || 
                                event.body.toLowerCase().startsWith("night") || 
                                event.body.toLowerCase().startsWith("Night")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'love-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("😴", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
