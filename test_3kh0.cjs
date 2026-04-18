const https = require('https');
https.get("https://raw.githubusercontent.com/z0m6ie/3kh0-assets/main/icons/2048.webp", (res) => {
  console.log("Status Code:", res.statusCode);
});
