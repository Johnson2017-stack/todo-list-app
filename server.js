const express = require('express')

const server = express();
const PORT = 3000;

server.set('views', './src/views');

server.set('view engine', 'ejs');

server.get("/", (req, res) => {
        res.send(index.js);
      });



server.listen(PORT, () => {
    console.log(`Listening on, ${PORT}`);
  });