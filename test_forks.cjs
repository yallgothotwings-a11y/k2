const https = require('https');

function checkRepo(user) {
    return new Promise((resolve) => {
        const req = https.request({
            hostname: 'raw.githubusercontent.com',
            path: `/${user}/3kh0-assets/main/icons/2048.webp`,
            method: 'HEAD'
        }, (res) => {
            console.log(user, res.statusCode);
            resolve(res.statusCode);
        });
        req.on('error', () => resolve(0));
        req.end();
    });
}
async function main() {
    const repos = ['z0m6ie', 'macdug2', 'titaniumnetwork-dev', 'FogNetwork', 'yk-vibe', '3kh0-assets', 'BinBashBanana'];
    for (const repo of repos) {
        await checkRepo(repo);
    }
}
main();
