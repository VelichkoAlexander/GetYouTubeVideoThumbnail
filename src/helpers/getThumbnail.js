import fetchHtml from "./getHtml.js";

async function getThumbnail(id) {
  const html = await fetchHtml(id);
  const pattern = `(https:\/\/i\.ytimg\.com\/an_webp\/${id}\/mqdefault.+?)",`
  const regx = new RegExp(pattern, 'gi');
  const results = html.match(regx);
  if (!results && 0 === results.length) {
    return '';
  }
  const [result] = results;
  return result.replace(`",`, '').replace(/\\u0026/g, '&');
}

export default getThumbnail;
