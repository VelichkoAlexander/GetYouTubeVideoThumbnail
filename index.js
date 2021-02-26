import fetch from 'isomorphic-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import downloadFile from "./helpers/download.js";

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.static('files'));
app.use(bodyParser.urlencoded({extended: true}));


//Index
app.get('/', (req, res) => res.render('index', {title: 'Hey', message: 'Hello there!'})
)

app.post('/', async (req, res) => {
  try {
    const {youtubeId} = req.body;
    const url = await getThumbnail(youtubeId);
    const localUrl = await downloadFile(url);
    console.log(localUrl)
    res.render('result',
      {
        title: 'Result',
        url: localUrl,
      });
  } catch (e) {
    console.log(e)
  }
  
  
})

app.listen(process.env.PORT || port, () => console.log('Server is running'));

async function fetchHtml(id) {
  const url = `https://www.youtube.com/results?search_query=${id}`;
  return await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
    }
  }).then(x => x.text());
}


async function getThumbnail(id) {
  const html = await fetchHtml(id);
  console.log(html);
  const pattern = `(https:\/\/i\.ytimg\.com\/an_webp\/${id}/mqdefault.+?)",`
  const regx = new RegExp(pattern, 'gi');
  console.log(regx);
  const results = html.match(regx);
  console.log(results);
  const [result] = results;
  console.log(result);
  return result.replace(`",`, '').replace(/\\u0026/g, '&');
}
