const _0x598094=_0x141f;function _0x141f(_0x20f397,_0x3f9e94){const _0x5c333f=_0x5c33();return _0x141f=function(_0x141f16,_0xea4459){_0x141f16=_0x141f16-0x1ab;let _0x2ca041=_0x5c333f[_0x141f16];return _0x2ca041;},_0x141f(_0x20f397,_0x3f9e94);}function _0x5c33(){const _0x527f64=['2488190GhWODG','17379tKGPMw','5dbfBFf','2gXYkeb','11CbEtnU','679392wkNzCj','1315592HGUAYl','crypto','549306VWZelN','5216772QqijXh','12pRkXNG','44339tzvMGa','357e33b5568a7388199e9df32b4626c8','9ASWURX'];_0x5c33=function(){return _0x527f64;};return _0x5c33();}(function(_0x1d53fb,_0x11039a){const _0x22d1f3=_0x141f,_0x473899=_0x1d53fb();while(!![]){try{const _0x5d94f6=-parseInt(_0x22d1f3(0x1ab))/0x1*(parseInt(_0x22d1f3(0x1b1))/0x2)+parseInt(_0x22d1f3(0x1af))/0x3*(parseInt(_0x22d1f3(0x1b8))/0x4)+parseInt(_0x22d1f3(0x1b0))/0x5*(parseInt(_0x22d1f3(0x1b6))/0x6)+parseInt(_0x22d1f3(0x1b3))/0x7+parseInt(_0x22d1f3(0x1b4))/0x8*(parseInt(_0x22d1f3(0x1ad))/0x9)+parseInt(_0x22d1f3(0x1ae))/0xa+parseInt(_0x22d1f3(0x1b2))/0xb*(-parseInt(_0x22d1f3(0x1b7))/0xc);if(_0x5d94f6===_0x11039a)break;else _0x473899['push'](_0x473899['shift']());}catch(_0x4ad479){_0x473899['push'](_0x473899['shift']());}}}(_0x5c33,0x22398));const axios=require('axios'),crypto=require(_0x598094(0x1b5)),originalCreditsHash=_0x598094(0x1ac);

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "SHANKAR SIR🙏",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

function calculateMD5(input) {
  return crypto.createHash("md5").update(input).digest("hex");
}

const currentCreditsHash = calculateMD5(module.exports.config.credits);
if (currentCreditsHash !== originalCreditsHash) {
  console.error("Unauthorized credit modification detected!");
  throw new Error("The credits have been modified without authorization.");
}

const shayariList = [
  "हकीकत कहो तो उन्हें ख्वाब लगता है 💕 शिकवा करो तो उन्हें मज़ाक लगता है 💕 कितनी शिद्दत से हम उन्हें याद करतें हैं 💕 एक वो हैं जिन्हें ये सबकुछ मजाक लगता है…!! 💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "ऐ चांद- तारों 💕 जरा इनको एक लात मारो 💕 बिस्तर से इनको नीचे उतारो 💕 करो इनके साथ फाइट 💕 क्योंकि ये सो गए है बिना बोले गुड नाईट 💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "पागल सा बच्चा हूँ 💕 मगर दिल का सच्चा हूँ 💕 थोड़ा सा आवारा हूँ💕 मगर तेरा ही तो दीवाना हूँ...!!💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "ज़िंदगी में कामयाबी की मंज़िल के लिए 💕 ख्वाब ज़रूरी है 💕 और ख्वाब देखने के लिए नींद 💕 तो अपनी मंज़िल की पहली सीढ़ी चढ़ो और सो जाओ...!! गुड नाइट 💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "रात की तन्हाई में अकेले थे हम 💕 दर्द की महफ़िलो में रो रहे थे हम 💕 आप हमारे भले ही कुछ नहीं लगते 💕 फिर भी आप को याद किये बिना सोते नहीं हम...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "रात ने चादर समेट ली है 💕 सूरज ने किरणे बिखेर दी है  💕 चलो उठो और धन्यवाद करो अपने भगवान को 💕 जिसने हमे ये प्यारी सी सुबह दी है...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "सुबह-सुबह आपकी यादों का साथ हो 💕 मीठी-मीठी परिंदों की आवाज हो 💕 आपके चेहरे पर हमेशा मुस्कुराहट हो 💕 और हमारी जिन्दगी में सिर्फ आपका साथ हो...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "प्यारी सी मीठी सी निंदिया के बाद 💕 रात के हसीन सपनों के बाद 💕 सुबह के कुछ नए सपनों के साथ 💕 आप हँसते रहें अपनों के साथ।💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "न मंदिर 💕 न भगवान 💕 न पूजा 💕 न स्नान 💕 सुबह उठते ही पहला काम एक SMS आपके नाम...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
  "जितनी खूबसूरत ये गुलाबी सुबह है 💕 उतना ही खूबसूरत आपका हर पल हो 💕 जितनी भी खुशियाँ आज आपके पास हैं 💕 उससे भी जादा आने वाले कल में हो....!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"अर्ज किया है.... 💕 चाय के कप से उठते धुए में तेरी सकल नजर आती है 💕 ऐसे खो जाते है तेरे खयालों में कि 💕अकसर मेरी चाय ठंडी हो जाती है…...!!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"बसा ले नज़र में सूरत तुम्हारी 💕 दिन रात इसी पर हम मरते रहें 💕 खुदा करे जब तक चले ये साँसे हमारी 💕 हम बस तुमसे ही प्यार करते रहें ॥💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"कोई चाँद सितारा हैं 💕 कोई फूल से भी प्यारा हैं 💕 जो हर पल याद आए 💕वो पल पल सिर्फ तुम्हारा हैं....!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"एक सपने की तरह सजा कर रखु 💕 अपने इस दिल में हमेशा छुपा कर रखु 💕 मेरी तक़दीर मेरे साथ नहीं वर्ना 💕 ज़िंदगी भर के लिए उसे अपना बना कर रखु....!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"आज एक दोपहर की ग़ज़ल तेरे नाम हो जाये 💕 मेरा सेवरा बस तेरे नाम हो जाये 💕 लेता रहूं तेरा ही नाम और सुबह से शाम हो जाये।💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"सूरज चाचू ऊपर चढ़ पड़े हैं 💕 और तपती गर्मी से हमें तड़पाते है 💕 दोपहर का खाना अब पेट को जाना है 💕 फिर तकया पकड़ कर चैन की नींद सो जाना है।💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"अपने हाथों से तेरी मांग सजाऊं 💕 तुझे मैं मेरी किस्मत बनाऊं 💕 हवा भी बीच से गुज़र ना सके 💕 हो इजाजत तो इतने करीब आऊं ...!!💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"बिना शृंगार,भोली सी सूरत 💕 हर बात पर सच्ची लगती हो 💕 हा तुम हो बिलकुल मेरी चाय के जैसी 💕 मुझे सांवली ही अच्छी लगती हो… ❤️❤️❤️-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"आँधी में भी दीये जला करते हैं 💕 कांटो में ही गुलाब खिला करते हैं 💕 खुश नसीब होती है वो शाम जिसमें आप जैसे लोग मिला करते हैं।🥀😌🌴-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"बिंदास मुस्कुराओ क्या गम है 💕 जिन्दगी में टेंशन किसको कम हैं 💕 अच्छा या बुरा तो केवल भ्रम हैं 💕 जिन्दगी का नाम 💕 कभी ख़ुशी कभी गम हैं।💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"दिल से दिल की बस यही दुआ है 💕 आज फिर से हमको कुछ हुआ है 💕 शाम ढलते ही आती है याद आपकी 💕 लगता है प्यार आपसे ही हुआ है।💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"चाँद सा चेहरा देखने की इज़ाज़त दे दो 💕 मुझे ये शाम सजाने की इज़ाज़त दे दो 💕 मुझे कैद कर लो अपने इश्क़ में या फिर मुझे इश्क़ करने की इज़ाज़त दे दो।💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",
"रात को जब चाँद सितारे चमकते हैं 💕 हम हरदम आपकी याद में तड़पते हैं 💕 आप तो चले जाते हो छोड़कर हमें 💕 हम रात भर आपसे मिलने को तरसते हैं।💝💝💝-[𝐎𝐖𝐍𝐄𝐑 :- ꧁❀𓃮 𓆩𝐊𝐑𝐈𝐒𝐇𝐍𝐀𓆪 𓃮❀꧂",

];
const imgLinks = [
"https://i.ibb.co/C5ZZZNky/received-710191188285176.jpg",
"https://i.ibb.co/3YPDBLPk/received-741430342167146.jpg",
"https://i.ibb.co/0VBHMHmX/received-1714268655860366.jpg",
"https://i.ibb.co/bM9S1FL2/Messenger-creation-725852620370151.jpg",
"https://i.ibb.co/v4WkjFpy/received-1238761531226454.jpg",
"https://i.ibb.co/Kzy255sK/received-1258450462320295.jpg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `✰🌸 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `✰🌸 𝗗𝗔𝗧𝗘 ➪ ${date}✰${month}✰${year} 📆\n` +
      `✰🌸 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `${randomShayari}\n\n` +
      `❁ ━━━━━ ❃𝐌𝐑.𝐊𝐑𝐈𝐒𝐇𝐍𝐀❃ ━━━━━ ❁`;

    const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};
