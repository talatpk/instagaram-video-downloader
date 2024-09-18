const fetch = require('node-fetch');

const postUrl = 'https://www.instagram.com/reels/C-u2CfuNzKU/';
const apiUrl = `http://localhost:3000/api/video?url=${postUrl}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the scraped data here
    mp4Url = data.videoUrl;
    console.log(mp4Url);
  })
  .catch(error => {
    console.error(error);
  });