const https = require('https');
https.get("https://cdn.jsdelivr.net/gh/ilikecheese55/ugs-singlefile-archive-01-12-26@main/icons/1v1lol.webp", (res) => {
  console.log("Status:", res.statusCode);
});
