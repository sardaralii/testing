// Import required modules
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response message
  res.end('Hello, World!\n');
});

// Define the port the server will listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
