const https = require('https');
https.get("https://tse2.mm.bing.net/th?q=minecraft+game+thumbnail&w=250&c=7", (res) => {
  console.log("Status Code:", res.statusCode);
  console.log("Content-Type:", res.headers['content-type']);
});
