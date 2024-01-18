const http = require('http');

let pageViews = {
  '/': 0,
  '/about': 0,
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    pageViews['/']++;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Lesson 1 NodeJS - Home Page!</h1>');
    res.write(`<p>Page Views: ${pageViews['/']}</p>`);
    res.write('<a href="/about">Go to About Page</a>');
    res.end();
  } else if (req.url === '/about') {
    pageViews['/about']++;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.write(`<p>Page Views: ${pageViews['/about']}</p>`);
    res.write('<a href="/">Go to Home Page</a>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});