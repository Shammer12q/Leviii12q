"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟐 𝐂𝐇𝐀𝐍𝐍𝐄𝐋\n\nHello,This is SCENE-MD created by BELTAH 😇';
    let d = '> OUR CHANNEL LINK IS HERE,MAKE SURE YOU FOLLOW OUR CHANNEL FO MORE UPDATES AND GIVEAWAYS ,THANK YOU.\n\n𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝐓𝐄𝐀𝐌.';
    let varmess = z + d;
    var lien = 'https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F';  // Remplacez cet URL par le lien que vous souhaitez envoyer
    await zk.sendMessage(dest, { text: varmess + "\n" + lien });
});

console.log("mon test");

});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *HACKING-MD* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Thomas*'
      let varmess=z+d
      var img='https://telegra.ph/file/7113ddc85a26a69a7a437.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
