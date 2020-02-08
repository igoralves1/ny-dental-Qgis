const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Title,Link,Date \n`);

request('https://www.uol.com.br/', (error, response, html) => {
    
    
  if (!error && response.statusCode == 200) {
    //const $ = cheerio.load(html);
    console.log(html)

    $('.areaBox___3jZkr').each((i, el) => {
        console.log('i ')
    //writeStream.write(`${title}, ${link}, ${date} \n`);
    });

    console.log('Scraping Done...');
  }
});