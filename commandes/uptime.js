const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');
const speed = require("performance-now");


const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " day, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hrs, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " mins, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " secs") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 
let timestamp = speed() 
let flashspeed = (speed() - timestamp).toFixed(4)
zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '😬', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre} = commandeOptions;



await repondre(`𝗣𝗼𝗻𝗴 𝗟𝗮𝘁𝗲𝗻𝗰𝘆!!\n*${flashspeed}* 𝗠𝘀`);

}
);


/*king({ nomCom: 'active',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '👀', 
    fromMe: 'true', 


  },

async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre, } = commandeOptions;



await zk.sendMessage(dest, { video: { url: 'https://telegra.ph/file/4bbcfdf0a62d8a53165ee.mp4' }, caption: `Hello ${m.pushName}, 𝐑𝐀𝐈𝐃𝐄𝐑 is alive since  ${runtime(process.uptime())}`, { quoted: m }); 
}

}
);*/

zokou({ nomCom: 'uptime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '😡', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`\n𝗦𝗖𝗘𝗡𝗘-𝗠𝗗-𝗩𝟮 𝗨𝗣𝗧𝗜𝗠𝗘 : *${runtime(process.uptime())}*`) 

   


  }
);

zokou({ nomCom: 'runtime',
    desc: 'To check runtime',    
    Categorie: 'General',
    reaction: '⏳', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`❖ 𝗦𝗖𝗘𝗡𝗘-𝗠𝗗-𝗩𝟮 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 ❖ \n> 「 *${runtime(process.uptime())}* 」 \n\n...𝐎𝐓𝐇𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒...\n ◦➛𝗥𝗮𝗺 : 𝟲𝟴/𝟭𝟯𝟮 𝗚𝗕\n ◦➛𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : 𝗖𝗵𝗿𝗼𝗺𝗲 𝗟𝗶𝗻𝘂𝘅\n ◦➛𝗦𝗮𝘃𝗲𝗿 : 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽\n ◦➛𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗕𝗲𝗹𝘁𝗮𝗵 𝗧𝗲𝗰𝗵 𝟮𝟱𝟰 🇰🇪\n`)

   


  }
);


zokou({ nomCom: 'ss',
    desc: 'screenshots website',
    Categorie: 'General',
    reaction: '🎥', 
    fromMe: 'true', 

},
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

    if (!arg || arg.length === 0) return repondre("provide a link...");

         const linkk = arg.join(' ');



let linkkk = `https://api.maher-zubair.tech/misc/sstab?url=${linkk}&dimension=720x720`;

let res = await getBuffer(linkkk);
   let caption = '*Powered by SCENE-MD*' 

await zk.sendMessage(dest, { image: res }, { caption: caption }, { quoted: ms });


}
);
