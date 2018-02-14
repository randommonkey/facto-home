const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

server.listen(3000, () => console.log('Server up in port 3000'))
