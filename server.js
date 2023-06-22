const express = require('express')

const server = express()

// server.set('views', './src/views');

// server.set('view engine', 'express');

server.get("/", (req, res) => {
        res.send("/", "welcome to my to do list app");
      });

let PORT = 3000;

server.listen(PORT, () => {
    console.log("Listening on", PORT);
  });