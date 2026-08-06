const axios = require('axios');
const fs = require('fs');

async function scrape() {
  const { data } = await axios.get('https://kalyra-web.netlify.app/');
  fs.writeFileSync('kalyra-home.html', data);
  console.log('Saved to kalyra-home.html');
}

scrape();
