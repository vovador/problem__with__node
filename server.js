const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  console.log('url', req.url);

  switch(req.url) {
    case 'app.js':
      res.end(fs.readFileSync('./app.js'));
      break;
    case '/':
      res.end(fs.readFileSync('./index.html'));
      break;
    case '/api':
      console.log('here');
      res.end(JSON.stringify({x: 1, y: 1}));
      break;
    default:
      res.end('');
  }
})

server.listen(4000);
console.log('Listening...');