express = require('express')

const app = express()

server.get("/", (req, res) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
        res.render("/");
      });
  });

const port = 3000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });