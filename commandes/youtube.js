
const {
  zokou
} = require("./../framework/zokou");
const yts = require('yt-search');
const BaseUrl = 'https://api.giftedtechnexus.co.ke';
const giftedapikey = 'giftedtechk'; /* For unlimited/premium api keys -----> t.me/mouricedevs */

france({
  nomCom: "play",
  categorie: "Download",
  reaction: "💿"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n
╭───────────────◆
│🎭 *Title:* ${apiResult.result.title}
│😬 *Quality:* ${apiResult.result.type}
│🙂‍↕️ *Duration:* ${videos[0].timestamp}
│🙂‍↔️ *Viewers:* ${videos[0].views}
│😬 *Uploaded:* ${videos[0].ago}
│🗿 *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
│ ©𝟐𝟎𝟐𝟒 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝟐𝟓𝟒 🇰🇪
╰─────────────────◆`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

france({
  nomCom: "song",
  categorie: "Download",
  reaction: "💿"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑\n
╭───────────────◆
│⚠️ *Title:* ${apiResult.result.title}
│😬 *Quality:* ${apiResult.result.type}
│🙂‍↕️ *Duration:* ${videos[0].timestamp}
│🙂‍↔️ *Viewers:* ${videos[0].views}
│🗿 *Uploaded:* ${videos[0].ago}
│😬 *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
│ ©𝟐𝟎𝟐𝟒 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝟐𝟓𝟒 🇰🇪
╰─────────────────◆`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          document: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});


france({
  nomCom: "video",
  categorie: "Download",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐏𝐋𝐀𝐘𝐄𝐑\n
╭───────────────◆
│💫 *Title:* ${apiResult.result.title}
│⚠️ *Quality:* ${apiResult.result.type}
│😬 *Duration:* ${videos[0].timestamp}
│🙂‍↕️ *Viewers:* ${videos[0].views}
│🙂‍↔️ *Uploaded:* ${videos[0].ago}
│🗿 *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
│ ©𝟐𝟎𝟐𝟒 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝟐𝟓𝟒 🇰🇪
╰─────────────────◆`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

      } else {
        repondre('Failed to download the video. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});

france({
  nomCom: "videodoc",
  categorie: "Download",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `𝐒𝐂𝐄𝐍𝐄-𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐏𝐋𝐀𝐘𝐄𝐑\n
╭───────────────◆
│💫 *Title:* ${apiResult.result.title}
│🗿 *Quality:* ${apiResult.result.type}
│⚠️ *Duration:* ${videos[0].timestamp}
│😬 *Viewers:* ${videos[0].views}
│🙂‍↕️ *Uploaded:* ${videos[0].ago}
│🙂‍↔️ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct YtLink:* ${videoUrl}

╭────────────────◆
│ ©𝟐𝟎𝟐𝟒 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 𝟐𝟓𝟒 🇰🇪
╰─────────────────◆`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          document: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

      } else {
        repondre('Failed to download the video. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});
