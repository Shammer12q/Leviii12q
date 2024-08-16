"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "group", reaction: "🎉", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐒𝐂𝐄𝐍𝐄-𝐌𝐃-𝐕𝟐 𝐆𝐑𝐎𝐔𝐏\n\nHello,This is SCENE-MD created by BELTAH 😇';
    let d = '> OUR GROUP LINK IS HERE,MAKE SURE YOU JOIN OUR PUBLIC GROUP FOR MORE UPDATES AND GIVEAWAYS ,THANK YOU.\n\n𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝐓𝐄𝐀𝐌.';
    let varmess = z + d;
    var lien = 'https://chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI';  // Remplacez cet URL par le lien que vous souhaitez envoyer
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
