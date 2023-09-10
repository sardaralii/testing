const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

// Define a route that responds with "Hello, world!"
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
