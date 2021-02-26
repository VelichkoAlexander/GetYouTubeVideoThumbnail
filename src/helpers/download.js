import https from 'https';
import fs from 'fs';
import {nanoid} from 'nanoid'

export default (url) => {
  return new Promise((resolve) => {
    const fileName = `${nanoid()}.webp`
    let file = fs.createWriteStream(`./public/files/${fileName}`);
    https.get(url, function (response) {
      response.on('data', function (chunk) {
        file.write(chunk)
      })
      response.on('end', function () {
        resolve(fileName)
      })
    })
  })
}
