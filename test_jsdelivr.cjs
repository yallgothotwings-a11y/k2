const https = require('https');
https.get("https://cdn.jsdelivr.net/gh/z0m6ie/3kh0-assets@main/icons/1v1lol.webp", (res) => {
  console.log("Status:", res.statusCode);
});
