const https = require('https');
https.get("https://raw.githubusercontent.com/ilikecheese55/ugs-singlefile-archive-01-12-26/main/icons/1v1lol.webp", (res) => {
  console.log("Status Code:", res.statusCode);
});
