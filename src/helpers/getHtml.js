import fetch from "isomorphic-fetch";

async function fetchHtml(id) {
  const url = `https://www.youtube.com/results?search_query=${id}`;
  return await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36"
    }
  }).then(x => x.text());
}

export default fetchHtml;
