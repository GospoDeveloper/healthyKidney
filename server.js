const http = require("node:http");

const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Hello from the overview");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end("Page not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`Server running on port 3000`);
});
