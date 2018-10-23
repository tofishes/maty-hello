const maty = require('maty');

const app = maty();
const port = 8080;

app.listen(port, () => {
 const startInfo = `server run at http:\/\/localhost:${port}`;

 console.log(startInfo);
});
