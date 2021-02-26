import getThumbnail from "../helpers/getThumbnail.js";
import downloadFile from "../helpers/download.js";

const result = async (req, res) => {
  try {
    const {youtubeId} = req.body;
    const url = await getThumbnail(youtubeId);
    const localUrl = await downloadFile(url);
    const {hostname} = req;
    res.render('pages/result',
      {
        title: 'Result',
        url: localUrl,
        hostname,
      });
  } catch (e) {
    console.log(e)
  }
}

export {
  result
}
