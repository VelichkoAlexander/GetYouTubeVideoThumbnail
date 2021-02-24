import https from 'https';
import fs from 'fs';
import {nanoid} from 'nanoid'

export default (url) => {
    return new Promise((resolve, reject) => {
        const fileName = `${nanoid()}.webp`
        let file = fs.createWriteStream(`./files/${fileName}`);
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
