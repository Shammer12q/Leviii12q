const {
  zokou
} = require("./../framework/zokou");
const {
  format,
  runtime
} = require('../framework/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

zokou(
  {
    nomCom: 'ping',
    categorie: 'General',
    reaction: '🏮',
    alias: ['p']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;
    const start = new Date().getTime();
    const msg = await zk.sendMessage(dest, {
      text: 'Beltah Pinging...',
    }, {
      quoted: ms
    });
    const end = new Date().getTime();
    const ping = end - start;
    await zk.sendMessage(dest, {
      text: `𝗣𝗼𝗻𝗴 \n *${ping}* 𝗠𝘀 `, edit: {
        id: msg.key.id, remoteJid: dest
      }});
    await zk.sendMessage(dest, {
      react:{ 
              text: "🙂‍↕️", key: ms.key
      }})
  }
);

/*zokou(
  {
    nomCom: 'runtime',
    Categorie: 'General',
    reaction: '🗿',
    alias: ['u']
  },
  async (dest, zk, commandOptions) => {
    const {
      ms
    } = commandOptions;
    const tumbUrl = 'whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F';
    const runtimetext = `*SCENE-MD-V3*\n*Bot Have Been Running For ${runtime(process.uptime())}* `;
    zk.sendMessage(dest, {
      text: runtimetext,
      contextInfo: {
        externalAdReply: {
          fromMe: true,
          title: `BELTAH TECH 254 🇰🇪`,
          body: `「 RUNTIME 」`,
          thumbnailUrl: tumbUrl,
        }
      }
    }, {
      quoted: ms
    })
  }
);
