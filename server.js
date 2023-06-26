const express = require('express')
const server = express();
const PORT = 3000;

server.use(express.static("public"));

server.set('views', './src/views');

server.set('view engine', 'ejs');

server.get("/", (req, res) => {
        res.render('index');
      });

server.listen(PORT, () => {
    console.log(`Listening on, ${PORT}`);
  });


  