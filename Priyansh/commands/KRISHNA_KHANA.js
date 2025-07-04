const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "khana",
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
                "https://i.imgur.com/Pxggwb4.gif",
                "https://i.imgur.com/meNOsuA.gif",
                "https://i.imgur.com/8jGHDhQ.gif",
                "https://i.imgur.com/OvcLBfi.gif",
                "https://i.imgur.com/lyUOAig.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n──────────────────\n\n🩷 🖤 𝐋𝐎 𝐁𝐄𝐁𝐘 𝐊𝐇𝐀𝐋𝐎 𝐊𝐇𝐀𝐍𝐀 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n──────────────────\n\n🩷 🖤 𝐋𝐎 𝐁𝐄𝐁𝐘 𝐊𝐇𝐀𝐋𝐎 𝐊𝐇𝐀𝐍𝐀 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n──────────────────\n\n🩷 🖤 𝐋𝐎 𝐁𝐄𝐁𝐘 𝐊𝐇𝐀𝐋𝐎 𝐊𝐇𝐀𝐍𝐀 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n──────────────────\n\n🩷 🖤 𝐋𝐎 𝐁𝐄𝐁𝐘 𝐊𝐇𝐀𝐋𝐎 𝐊𝐇𝐀𝐍𝐀 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n──────────────────\n\n🩷 🖤 𝐋𝐎 𝐁𝐄𝐁𝐘 𝐊𝐇𝐀𝐋𝐎 𝐊𝐇𝐀𝐍𝐀 😘😘\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("khana") || 
                                event.body.toLowerCase().startsWith("Khana") || 
                                event.body.toLowerCase().startsWith("KHANA") ||
                                event.body.toLowerCase().startsWith("khalo") || 
                                event.body.toLowerCase().startsWith("Khalo") ||
                                event.body.toLowerCase().startsWith("KHALO") || 
                                event.body.toLowerCase().startsWith("Launch")) { 

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
                                                api.setMessageReaction("🍲", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
