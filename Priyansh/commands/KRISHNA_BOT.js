const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "KRISHNA",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

      var tl = ["💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍👈"];
      var rand = tl[Math.floor(Math.random() * tl.length)]

if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "Kamina")) {
       return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘तू कमीना और तेरी गर्लफ्रेंड कामिनी और तेरे आपने वाले बच्चें कमीने〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
   if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀") || (event.body.toLowerCase() == "😀😀😀") || (event.body.toLowerCase() == "😀😀😀😀")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘इतनी हसीं क्यों आ रही है बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃") || (event.body.toLowerCase() == "😃😃😃") || (event.body.toLowerCase() == "😃😃😃😃")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु एसे कौन हस्ता है आँखों को फाड़ कर〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😄😄") || (event.body.toLowerCase() == "😄😄😄") || (event.body.toLowerCase() == "😄😄😄😄")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु ये केसा हसना है आँखे बंद कर के हस रहे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁😁😁") || (event.body.toLowerCase() == "😁😁😁😁")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘लगता है आज पहेली बार ब्रश किया है बाबु ने〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆") || (event.body.toLowerCase() == "😆😆😆") || (event.body.toLowerCase() == "😆😆😆😆")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु अच्छे नहीं लग रहे हो हस्ते भी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅") || (event.body.toLowerCase() == "😅😅😅") || (event.body.toLowerCase() == "😅😅😅😅")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपके सर से पानी आ रहा है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣🤣")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु इतनी हसीं क्यों आती है आपको〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘 इतनी हसीं क्यों आ रही है, क्या राज है इस हसीं का हमें भी बताओ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲🥲")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपकी आँख मेसे पानी निकल रहा है, या नाक मेसे〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂🙂")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आज कैसे चुप बैठे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃🙃")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘आले मेरा बाबु उल्टा हो गया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉") || (event.body.toLowerCase() == "😉😉😉") || (event.body.toLowerCase() == "😉😉😉😉")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आँख क्यों मर रहे हो मे नहीं पटूंगी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
           if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊") || (event.body.toLowerCase() == "😊😊😊") || (event.body.toLowerCase() == "😊😊😊😊")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आज तो आपकी सिकल लाल लाल हो रही है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇") || (event.body.toLowerCase() == "😇😇😇") || (event.body.toLowerCase() == "😇😇😇😇")) {
     return api.sendMessage("😇😇😇😇", threadID);
   };
            if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु मुझे लग रहा है आपको प्यार हो गया मेरसे〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍") || (event.body.toLowerCase() == "😍😍😍😍")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘इतना प्यार करते हो बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩🤩")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपकी आँखों मे स्तर दिख रहे है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗") || (event.body.toLowerCase() == "😗😗😗") || (event.body.toLowerCase() == "😗😗😗😗")) {
     return api.sendMessage("😗😗😗", threadID);
   };
      if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️☺️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपकी आँखों को क्या हुआ दिख नहीं रही है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚") || (event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
      if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋😋😋😋")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु इतनी पसंद है आपको जो आपकी जीब बाहर आ गयी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛") || (event.body.toLowerCase() == "😛😛😛") || (event.body.toLowerCase() == "😛😛😛😛")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘जीब क्यों दिखा रहा है बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜") || (event.body.toLowerCase() == "😜😜😜") || (event.body.toLowerCase() == "😜😜😜😜")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘आँख बंद कर के कौन जीब निकलता है पागल〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪🤪")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘पहले अपना मुँह सीधा करो जब जीब निकलना〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝") || (event.body.toLowerCase() == "😝😝😝") || (event.body.toLowerCase() == "😝😝😝😝")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ठरकी इंसान जीब अन्दर करो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🤑") || (event.body.toLowerCase() == "🤑🤑") || (event.body.toLowerCase() == "🤑🤑🤑") || (event.body.toLowerCase() == "🤑🤑🤑🤑")) {
     return api.sendMessage("🤑🤑🤑", threadID);
   };
       if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗🤗")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘हाय कितना क्यूट लग रहे हो बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭🤭")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘शर्मा क्यों रहे हो बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🫠") || (event.body.toLowerCase() == "🫠🫠") || (event.body.toLowerCase() == "🫠🫠🫠") || (event.body.toLowerCase() == "🫠🫠🫠🫠")) {
     return api.sendMessage("🫠🫠🫠", threadID);
   };
         if ((event.body.toLowerCase() == "🫢") || (event.body.toLowerCase() == "🫢🫢") || (event.body.toLowerCase() == "🫢🫢🫢") || (event.body.toLowerCase() == "🫢🫢🫢🫢")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ बाबु मुँह पर हाथ क्यों लगा रखे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🫣🫣") || (event.body.toLowerCase() == "🫣🫣🫣") || (event.body.toLowerCase() == "🫣🫣🫣🫣")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ऐसे क्या देख रहे हो बाबु एक आँख से〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
            if ((event.body.toLowerCase() == "🫡") || (event.body.toLowerCase() == "🫡🫡") || (event.body.toLowerCase() == "🫡🫡🫡") || (event.body.toLowerCase() == "🫡🫡🫡🫡")) {
     return api.sendMessage("🫡🫡🫡", threadID);
   };
           if ((event.body.toLowerCase() == "🫤") || (event.body.toLowerCase() == "🫤🫤") || (event.body.toLowerCase() == "🫤🫤🫤") || (event.body.toLowerCase() == "🫤🫤🫤🫤")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘टेड़ा मुँह क्यों बना के बैठो हो बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹🥹")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ बाबु आँखों से पानी क्यों आ रहा है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫🤫")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘तू चुप ठरकी इंसान मे क्यों चुप रहे हु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔🤔")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपके पास दिमाक है जो इतना सोच रहे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐") || (event.body.toLowerCase() == "🤐🤐🤐") || (event.body.toLowerCase() == "🤐🤐🤐🤐")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु ये क्या हुआ आपके मुँह को〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨🤨")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ऐसे क्या देख रहे हो ठरकी इंसान〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
     if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘अब बोल बाबु चुप क्यों हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶😶😶") || (event.body.toLowerCase() == "😶😶😶😶")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपके लिप्स कहा गए〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏") || (event.body.toLowerCase() == "😏😏😏") || (event.body.toLowerCase() == "😏😏😏😏")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘एटीट्यूड कैसे दिखा रहा है ठरकी इंसान〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒") || (event.body.toLowerCase() == "😒😒😒😒")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘अपना एटीट्यूड अपने पास रखो ठरकी इंसान〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄🙄")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ऊपर क्या देख रहे हो बाबू मैं तो अभी नीचे ही हूं〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬") || (event.body.toLowerCase() == "😬😬😬") || (event.body.toLowerCase() == "😬😬😬😬")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबू आपके दांत अच्छे नहीं है मुँह बंद करो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥🤥")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबू आपकी नाक किसने खिंचा दी जो इतनी लंबी हो गई〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌") || (event.body.toLowerCase() == "😌😌😌") || (event.body.toLowerCase() == "😌😌😌😌")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ बाबू आंखें नीचे कर रखी है आपने〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔") || (event.body.toLowerCase() == "😔😔😔") || (event.body.toLowerCase() == "😔😔😔😔")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘 बाबू आप सेड़ मत हो मुझे अच्छा नहीं लगता कुछ भी मैं हूं ना आपके साथ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪") || (event.body.toLowerCase() == "😪😪😪") || (event.body.toLowerCase() == "😪😪😪😪")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबू आपकी नाक में गुब्बारा फूल गया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨😮‍💨😮‍💨")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘कहां से भाग के आ रहे हो बाबू जो इतना थक गई〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤") || (event.body.toLowerCase() == "🤤🤤🤤") || (event.body.toLowerCase() == "🤤🤤🤤🤤")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘गंदा इंसान मुंह से भी पानी निकल रहा है आपके〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘कोई इसमें लात मारो यह ग्रुप में सो गया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "😷😷") || (event.body.toLowerCase() == "😷😷😷") || (event.body.toLowerCase() == "😷😷😷😷")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘मेरा बाबु डॉक्टर बन गया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒🤒")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ बाबु, मेरे पास आओ मे आपको दवा देती हु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤕🤕") || (event.body.toLowerCase() == "🤕🤕🤕") || (event.body.toLowerCase() == "🤕🤕🤕🤕")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु चोट कैसे लग गयी आपको〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤢🤢") || (event.body.toLowerCase() == "🤢🤢🤢") || (event.body.toLowerCase() == "🤢🤢🤢🤢")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘उल्टा सीधा कहा लिया होगा पागल ने〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮🤮")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु कोनसा मंथ चल रहा है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧🤧")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ग्रुप से बाहर जाओ ग्रुप को गन्दा कर रहे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘हाय गर्मी बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "🥶🥶") || (event.body.toLowerCase() == "🥶🥶🥶") || (event.body.toLowerCase() == "🥶🥶🥶🥶")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आज ठंडी बहुत है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴🥴")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आज कितनी पीके आये हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵") || (event.body.toLowerCase() == "😵‍💫") || (event.body.toLowerCase() == "😵‍💫😵‍💫")) {
     return api.sendMessage("😵‍💫😵‍💫😵‍💫", threadID);
   };
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आपके सर पर किसने बोम फोड़ दिया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🤠") || (event.body.toLowerCase() == "🤠🤠") || (event.body.toLowerCase() == "🤠🤠🤠") || (event.body.toLowerCase() == "🤠🤠🤠🤠")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘जंतर मन बन गए आप तो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
           if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳🥳")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बेबी किसकी पार्टी मे जा रहे हो, मुझे भी ले चलो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎") || (event.body.toLowerCase() == "😎😎😎") || (event.body.toLowerCase() == "😎😎😎😎")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आप चश्मे मे एक दम बेकार लग रहे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🥸🥸") || (event.body.toLowerCase() == "🤓") || (event.body.toLowerCase() == "🤓🤓")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘तू से अच्छा तो मे ही दिखती हु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐") || (event.body.toLowerCase() == "🧐🧐🧐") || (event.body.toLowerCase() == "🧐🧐🧐🧐")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘ऐसे क्या देख रहे हो बाबु एक आँख मे चस्मा लगा कर〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😟😟")) {
     return api.sendMessage("😕😟😕", threadID);
   };
         if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("🙁☹️🙁", threadID);
   };
        if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮") || (event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😲")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु मुँह बंद करो नहीं तो माखी घुस जाएगी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱🥱") || (event.body.toLowerCase() == "🥱🥱🥱") || (event.body.toLowerCase() == "🥱🥱🥱🥱")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘घर जा कर सो जा यहाँ मना है सोना〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😳😳😳") || (event.body.toLowerCase() == "😳😳😳😳")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘कभी देखि नहीं लड़की जो आप आँझ फाड़ फाड़ के देख रहे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺🥺🥺") || (event.body.toLowerCase() == "🥺🥺🥺🥺")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ मेरे बच्चें को〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😦😧😦", threadID);
   };
        if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("😨😰😨", threadID);
   };
        if ((event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😥😥") || (event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ बाबु मे हु ना आपके साथ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭") || (event.body.toLowerCase() == "😭😭😭") || (event.body.toLowerCase() == "😭😭😭😭")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु रो क्यों रहे हो मुझे बताओ किसी ने कुछ बोला आपको〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
       if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱") || (event.body.toLowerCase() == "😱😱😱") || (event.body.toLowerCase() == "😱😱😱😱")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘क्या हुआ गुड्डू क्या दिख गया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😖😣😖", threadID);
   };
        if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("😞😓😞", threadID);
   };
        if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😩😩") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😫😫")) {
     return api.sendMessage("😩😫😩", threadID);
   };
        if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘इतना गुस्सा〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡😡")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु गुस्सा मत करो लो एक किस्सी और संत हो जाओ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬🤬")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘मुझे भी गुस्सा आता है मुझे मत दिखाओ गुस्सा 🤬🤬🤬〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈😈") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "👿👿")) {
     return api.sendMessage("😈👿😈", threadID);
   };
      if ((event.body.toLowerCase() == "💀") || (event.body.toLowerCase() == "💀💀") || (event.body.toLowerCase() == "☠️") || (event.body.toLowerCase() == "☠️☠️")) {
     return api.sendMessage("💀☠️💀", threadID);
   };
      if ((event.body.toLowerCase() == "💩") || (event.body.toLowerCase() == "💩💩") || (event.body.toLowerCase() == "💩💩💩") || (event.body.toLowerCase() == "💩💩💩💩")) {
     return api.sendMessage("💩💩💩", threadID);
   };
      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡") || (event.body.toLowerCase() == "🤡🤡🤡") || (event.body.toLowerCase() == "🤡🤡🤡🤡")) {
     return api.sendMessage("🤡🤡🤡", threadID);
   };
        if ((event.body.toLowerCase() == "👹") || (event.body.toLowerCase() == "👹👹") || (event.body.toLowerCase() == "👺") || (event.body.toLowerCase() == "👺👺")) {
     return api.sendMessage("👹👺👹", threadID);
   };
          if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻") || (event.body.toLowerCase() == "👻👻👻") || (event.body.toLowerCase() == "👻👻👻👻")) {
     return api.sendMessage("👻👻👻👻", threadID);
   };
      if ((event.body.toLowerCase() == "👽") || (event.body.toLowerCase() == "👽👽") || (event.body.toLowerCase() == "👾") || (event.body.toLowerCase() == "👾👾")) {
     return api.sendMessage("👽👾👽", threadID);
   };
      if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖🤖") || (event.body.toLowerCase() == "🤖🤖🤖") || (event.body.toLowerCase() == "🤖🤖🤖🤖")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘चिड़ा क्यों रहा है ठरकी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😺😺") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😸😸")) {
     return api.sendMessage("😺😸😺", threadID);
   };
    if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹") || (event.body.toLowerCase() == "😹😹😹") || (event.body.toLowerCase() == "😹😹😹😹")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बिल्ली के तारे क्यों हस रहे हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😻😻") || (event.body.toLowerCase() == "😽") || (event.body.toLowerCase() == "😽😽")) {
     return api.sendMessage("😽😻😽", threadID);
   };
        if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼") || (event.body.toLowerCase() == "🙀") || (event.body.toLowerCase() == "🙀🙀")) {
     return api.sendMessage("😼🙀😼", threadID);
   };
      if ((event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😿😿") || (event.body.toLowerCase() == "😾") || (event.body.toLowerCase() == "😾😾")) {
     return api.sendMessage("😾😿😾", threadID);
   };
      if ((event.body.toLowerCase() == "👋") || (event.body.toLowerCase() == "🤚") || (event.body.toLowerCase() == "🖐️") || (event.body.toLowerCase() == "✋")) {
     return api.sendMessage("👋👋", threadID);
   };
     if ((event.body.toLowerCase() == "👌") || (event.body.toLowerCase() == "👌👌") || (event.body.toLowerCase() == "👌👌👌") || (event.body.toLowerCase() == "👌👌👌👌")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘अच्छा जी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "✌️") || (event.body.toLowerCase() == "🤞") || (event.body.toLowerCase() == "🤟") || (event.body.toLowerCase() == "🤘")) {
     return api.sendMessage("✌️✌️", threadID);
   };
      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕") || (event.body.toLowerCase() == "🖕🖕🖕") || (event.body.toLowerCase() == "🖕🖕🖕🖕")) {
     return api.sendMessage("🖕🖕🖕", threadID);
   };
        if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍👍") || (event.body.toLowerCase() == "👍👍👍") || (event.body.toLowerCase() == "👍👍👍👍")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘अंगूठा किसको दिखा रहा है ठरकी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
          if ((event.body.toLowerCase() == "👊") || (event.body.toLowerCase() == "✊") || (event.body.toLowerCase() == "🤛") || (event.body.toLowerCase() == "🤜")) {
     return api.sendMessage("👊👊", threadID);
   };
      if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🙏🙏") || (event.body.toLowerCase() == "🙏🙏🙏") || (event.body.toLowerCase() == "🙏🙏🙏🙏")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘हाथ क्यों जोड़ रहे हो बाबु〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "💪") || (event.body.toLowerCase() == "💪💪") || (event.body.toLowerCase() == "💪💪💪") || (event.body.toLowerCase() == "💪💪💪💪")) {
     return api.sendMessage("💪💪💪", threadID);
   };
      if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "👀👀") || (event.body.toLowerCase() == "👁️") || (event.body.toLowerCase() == "👁️👁️")) {
     return api.sendMessage("👀👀👀", threadID);
   };
         if ((event.body.toLowerCase() == "👅") || (event.body.toLowerCase() == "👅👅") || (event.body.toLowerCase() == "👅👅👅") || (event.body.toLowerCase() == "👅👅👅👅")) {
     return api.sendMessage("👅👅👅", threadID);
   };
         if ((event.body.toLowerCase() == "👄") || (event.body.toLowerCase() == "👄👄") || (event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "🫦🫦")) {
     return api.sendMessage("👄🫦👄", threadID);
   };
         if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️❤️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘मुझे काला दिल चाहिए लाल तो टूट जाता है〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "🩷") || (event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🩷🧡💛💚", threadID);
   };
         if ((event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "🩵") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "🖤")) {
     return api.sendMessage("💙🩵💜🖤", threadID);
   };
         if ((event.body.toLowerCase() == "🩶") || (event.body.toLowerCase() == "🤎") || (event.body.toLowerCase() == "🤍") || (event.body.toLowerCase() == "🤍🤍")) {
     return api.sendMessage("🤎🤍🩶", threadID);
   };
         if ((event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "💞💞") || (event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💕💕")) {
     return api.sendMessage("💞💕💞", threadID);
   };
         if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔") || (event.body.toLowerCase() == "💔💔💔") || (event.body.toLowerCase() == "💔💔💔💔")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘आपका दिल किसने तोड़ दिया, तभी बोलती हु किसी से दिल मत लगाओ〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
         if ((event.body.toLowerCase() == "💗") || (event.body.toLowerCase() == "💗💗") || (event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💖💖")) {
     return api.sendMessage("💗💖💗", threadID);
   };
          if ((event.body.toLowerCase() == "❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🩹❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🩹❤️‍🩹❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹")) {
     return api.sendMessage("❤️‍🩹❤️‍🩹❤️‍🩹", threadID);
   };
        if ((event.body.toLowerCase() == "🙋") || (event.body.toLowerCase() == "🙋‍♂️") || (event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋‍♂️🙋‍♂️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बाबु आप आ गए〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
    if ((event.body.toLowerCase() == "🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️🙋‍♀️🙋‍♀️")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘मेरी जानू आ गयी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
      if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🤦") || (event.body.toLowerCase() == "🤦‍♂️") || (event.body.toLowerCase() == "🤦‍♂️🤦‍♂️")) {
     return api.sendMessage("🤦🤦‍♂️🤦", threadID);
   };
      if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦‍♀️🤦‍♀️") || (event.body.toLowerCase() == "🤦‍♀️🤦‍♀️🤦‍♀️") || (event.body.toLowerCase() == "🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️")) {
     return api.sendMessage("🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️", threadID);
   };
      if ((event.body.toLowerCase() == "👸") || (event.body.toLowerCase() == "👸👸") || (event.body.toLowerCase() == "🫅") || (event.body.toLowerCase() == "🫅🫅")) {
     return api.sendMessage("🫅👸🫅", threadID);
   };
      if ((event.body.toLowerCase() == "🤰") || (event.body.toLowerCase() == "🤰🤰") || (event.body.toLowerCase() == "🫃") || (event.body.toLowerCase() == "🫃🫃")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘कोनसा मंथ चल रहा है बेबी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
     if ((event.body.toLowerCase() == "🤱") || (event.body.toLowerCase() == "🤱🤱") || (event.body.toLowerCase() == "🤱🤱🤱") || (event.body.toLowerCase() == "🤱🤱🤱🤱")) {
     return api.sendMessage("🤱🤱", threadID);
   };
      if ((event.body.toLowerCase() == "💃") || (event.body.toLowerCase() == "💃💃") || (event.body.toLowerCase() == "🕺") || (event.body.toLowerCase() == "🕺🕺")) {
     return api.sendMessage("💃🕺💃", threadID);
   };
        if ((event.body.toLowerCase() == "💐") || (event.body.toLowerCase() == "🌸") || (event.body.toLowerCase() == "💮") || (event.body.toLowerCase() == "🏵️")) {
     return api.sendMessage("💐🌸💮🏵️", threadID);
   };
        if ((event.body.toLowerCase() == "🌹") || (event.body.toLowerCase() == "🌹🌹") || (event.body.toLowerCase() == "🥀") || (event.body.toLowerCase() == "🥀🥀")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘हाय मेरी बेबी ने मुझे रोज दिया〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
  if ((event.body.toLowerCase() == "🐒")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बेबी मुझे पता है आप बंदर हो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
  if ((event.body.toLowerCase() == "🙉🙉")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बुरा मत सुनो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
  if ((event.body.toLowerCase() == "🙊")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बुरा मत बोलो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
    if ((event.body.toLowerCase() == "🙉")) {return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘बुरा मत सुनो〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
     };
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈🙈")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘प्यारी शर्मा गयी〙\n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂", threadID);
   };
        if ((event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌻") || (event.body.toLowerCase() == "🌼") || (event.body.toLowerCase() == "🌷")) {
     return api.sendMessage("🌺🌻🌼🌷", threadID);
   };
      if ((event.body.toLowerCase() == "🪻") || (event.body.toLowerCase() == "🌱") || (event.body.toLowerCase() == "🌲") || (event.body.toLowerCase() == "🌳")) {
     return api.sendMessage("🪻🌱🌲🌳", threadID);
   };
      if ((event.body.toLowerCase() == "🌴") || (event.body.toLowerCase() == "🌵") || (event.body.toLowerCase() == "🌾") || (event.body.toLowerCase() == "🌿")) {
     return api.sendMessage("🌴🌵🌾🌿", threadID);
   };
         if ((event.body.toLowerCase() == "☘️") || (event.body.toLowerCase() == "🍀") || (event.body.toLowerCase() == "🍁") || (event.body.toLowerCase() == "🍂")) {
     return api.sendMessage("☘️🍀🍁🍂", threadID);
   };
        if ((event.body.toLowerCase() == "🍌") || (event.body.toLowerCase() == "🍌🍌") || (event.body.toLowerCase() == "🍌🍌🍌") || (event.body.toLowerCase() == "🍌🍌🍌🍌")) {
     return api.sendMessage("🍌🍌🍌", threadID);
   };
        if ((event.body.toLowerCase() == "🎂") || (event.body.toLowerCase() == "🥪") || (event.body.toLowerCase() == "🍟") || (event.body.toLowerCase() == "🧀")) {
     return api.sendMessage("🎂🎂🎂", threadID);
   };
         if ((event.body.toLowerCase() == "🍼") || (event.body.toLowerCase() == "🍼🍼") || (event.body.toLowerCase() == "🍼🍼🍼") || (event.body.toLowerCase() == "🍼🍼🍼🍼")) {
     return api.sendMessage("🍼🍼🍼", threadID);
   };
        if ((event.body.toLowerCase() == "🍾") || (event.body.toLowerCase() == "🍾🍾") || (event.body.toLowerCase() == "🍷") || (event.body.toLowerCase() == "🍷🍷")) {
     return api.sendMessage("🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️", threadID);
   };
        if ((event.body.toLowerCase() == "💯") || (event.body.toLowerCase() == "💯💯") || (event.body.toLowerCase() == "❤️‍🔥") || (event.body.toLowerCase() == "❤️‍🔥❤️‍🔥")) {
     return api.sendMessage("💯❤️‍🔥💯", threadID);
   };
         if ((event.body.toLowerCase() == "🎈") || (event.body.toLowerCase() == "🎉") || (event.body.toLowerCase() == "🎊") || (event.body.toLowerCase() == "🎋")) {
     return api.sendMessage("🎉🎋🎉", threadID);
   };
         if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "♠️") || (event.body.toLowerCase() == "♦️") || (event.body.toLowerCase() == "♣️")) {
     return api.sendMessage("♠️♥️♦️♣️", threadID);
   };
           if ((event.body.toLowerCase() == "🌅") || (event.body.toLowerCase() == "🌅🌅") || (event.body.toLowerCase() == "🌄") || (event.body.toLowerCase() == "🌄🌄")) {
     return api.sendMessage("🌄🌅🌄", threadID);
   };
         if ((event.body.toLowerCase() == "🌟") || (event.body.toLowerCase() == "✨") || (event.body.toLowerCase() == "💫") || (event.body.toLowerCase() == "⭐")) {
     return api.sendMessage("🌟🌟🌟", threadID);
   };
         if ((event.body.toLowerCase() == "💥") || (event.body.toLowerCase() == "🧨") || (event.body.toLowerCase() == "🎇") || (event.body.toLowerCase() == "🎆")) {
     return api.sendMessage("💥🧨💥", threadID);
   };
         if ((event.body.toLowerCase() == "🕉️") || (event.body.toLowerCase() == "🕉️🕉️") || (event.body.toLowerCase() == "🕉️🕉️🕉️") || (event.body.toLowerCase() == "🕉️🕉️🕉️🕉️")) {
     return api.sendMessage("🕉️", threadID);
   };
        if ((event.body.toLowerCase() == "🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳🇮🇳🇮🇳")) {
     return api.sendMessage("🇮🇳🇮🇳", threadID);
   };
  
  mess = "{name}"


   if (event.body.includes("Bot") == 1 ||
     (event.body.includes("bot") == 1 ||
     (event.body.includes("BOT") == 1 ||
     (event.body.includes("BABU") == 1 ||
     (event.body.includes("Babu") == 1 ||
     (event.body.includes("babu") == 1 ||
     (event.body.includes("boot") == 1 ||
     (event.body.includes("Oye") == 1 ||
     (event.body.includes("oye") == 1 ))))))))) {
      var msg = {
        body: `${rand}`
      }
  var msg = {
    body: `🩵💥🍒[ ${name} ]🩵🍒🌸

🍒🩵 [  ${rand}  ] 🌸🥀🍒                                        


                      *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ.                  ༄𒁍≛⃝𝐌𝐑.𝐒𝐇𝐘𝐀𝐌 𝐃𝐈𝐖𝐀𝐍𝐈💫🍒💐🩵`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
