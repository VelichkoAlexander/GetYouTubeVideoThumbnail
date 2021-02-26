import getThumbnail from "../helpers/getThumbnail.js";
import downloadFile from "../helpers/download.js";

const result = async (req, res) => {
  try {
    const {youtubeId} = req.body;
    const url = await getThumbnail(youtubeId);
    const localUrl = await downloadFile(url);
    console.log(localUrl);
    res.render('pages/result',
      {
        title: 'Result',
        url: localUrl,
      });
  } catch (e) {
    console.log(e)
  }
}

export {
  result
}
