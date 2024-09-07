"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "script", reaction: "🌟", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/Beltahmd/beltah-md';
const img = '';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 
 
        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login,
               
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

const gitdata = `𝐇𝐞𝐥𝐥𝐨 👋 ,𝐓𝐡𝐢𝐬 𝐢𝐬 𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐁𝐎𝐓 .

𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 :
whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐡𝐚𝐭 𝐫𝐨𝐨𝐦 : 
chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI

𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐁𝐞𝐥𝐭𝐚𝐡 :
wa.me/254114141192 

𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 :
www.youtube.com/@Beltahtech2024
__________________________________
> 𝐌𝐚𝐝𝐞 𝐨𝐧 𝐄𝐚𝐫𝐭𝐡 𝐛𝐲 𝐁𝐞𝐥𝐭𝐚𝐡 𝐭𝐞𝐜𝐡 `;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /*let z = 'Hello This is  *FLASH-MD* \n\n ' + "The Following is *FLASH-MD Repo.*";
    let d = './Sprinter';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
