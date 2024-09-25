const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Africa/Nairobi');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD-MM-YYYY');

    let infoMsg =  `
 ❍ 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐁𝐎𝐓 ❍ 
╭══➤ 𝐎𝐰𝐧𝐞𝐫 𝐢𝐧𝐟𝐨
┃❂ 𝗢𝘄𝗻𝗲𝗿 : *${s.OWNER_NAME}*
┃❂ 𝗣𝗿𝗲𝗳𝗶𝘅 : *[ ${s.PREFIXE} ]* 
┃❂ 𝗠𝗼𝗱𝗲 : *${mode}*
┃❂ 𝗗𝗮𝘁𝗲  : *${date}* 
┃❂ 𝗧𝗶𝗺𝗲  : *${temps}*
╰─────────────┈⊷
╭══➤ 𝐁𝐎𝐓 𝐒𝐘𝐒𝐓𝐄𝐌
┃❂ 𝗦𝗮𝘃𝗲𝗿 : 𝗖𝗵𝗿𝗼𝗺𝗲 𝗟𝗶𝗻𝘂𝘅
┃❂ 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲 : 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗯𝗼𝘁
┃❂ 𝗨𝘀𝗲𝗱 𝗥𝗮𝗺 : 𝟳𝟵 𝗚𝗕
╰─────────────┈⊷
*Follow our channel for updates*
➤ whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F
*Join our public chat group* 
➤ chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI`;
let menuMsg =  `
╭══➤ 𝐁𝐨𝐭 𝐔𝐬𝐞𝐫
┃❂ *USER* : ${nomAuteurMessage} 
╰─────────────┈⊷${readmore}
𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒
`;
    for (const cat in coms) {
        menuMsg += `
╭═══❂ *${cat}* ❂
┃╭═════════`;
        for (const cmd of coms[cat]) {
            menuMsg += `          
┃❏➤  *${cmd}* `    
        } 
        menuMsg +=`
┃╰════════
╰═══════════⊷
`
    }
  
       menuMsg += `
╭═══❂ *Bug Menu* ❂
┃╭════════
┃❏➤ *xʀᴇᴀᴄᴛ <ʀᴇᴘʟʏ ᴄʜᴀᴛ>*
┃❏➤ *x <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *x2 <ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *ɪᴏsʙᴜɢ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *ɪᴏsʙᴜɢ2 <ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xᴀᴜᴅɪᴏ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xᴀᴜᴅɪᴏ2 <ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xsᴛɪᴄᴋᴇʀ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xsᴛɪᴄᴋᴇʀ2 <ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xʟᴏᴄ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xʟᴏᴄ2 <ᴀᴍᴏᴜɴᴛ>*
┃❏➤ *xʟɪsᴛ <ɴᴜᴍʙᴇʀ|ᴀᴍᴏᴜɴᴛ>*
┃╰──════════
╰═══════════⊷ 
➤ 𝐁𝐨𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫
> 𝐀 𝐩𝐫𝐨𝐝𝐮𝐜𝐭 𝐨𝐟 𝐁𝐞𝐥𝐭𝐚𝐡 𝐓𝐞𝐜𝐡 𝐓𝐞𝐚𝐦
> 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐁𝐞𝐥𝐭𝐚𝐡 𝐊𝐞 𝐅𝐫𝐨𝐦 𝐊𝐞𝐧𝐲𝐚 

𝗧𝗛𝗔𝗡𝗞 𝗬𝗢𝗨 𝗙𝗢𝗥 𝗟𝗢𝗩𝗜𝗡𝗚 𝗦𝗖𝗘𝗡𝗘-𝗠𝗗
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
