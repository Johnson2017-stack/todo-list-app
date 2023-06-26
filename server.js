const express = require('express')
const server = express();
const PORT = 3000;

server.use(express.static("public"));

server.get("/", (req, res) => {
        res.sendFile('index.html');
      });

server.listen(PORT, () => {
    console.log(`Listening on, ${PORT}`);
  });

  