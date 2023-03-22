const { createServer } = require("http");
const next = require("next");

const port = 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on <http://localhost>:${port}`);
  });
});
