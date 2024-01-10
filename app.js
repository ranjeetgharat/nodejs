const express = require('express');
const app = express();
const port = 3000; // Choose your desired port

// Health check endpoint
app.get('/healthcheck', (req, res) => {
  try {
    const healthCheck = {
      status: 'ok',
      uptime: process.uptime(),
      message: 'API is running'
    };
    res.status(200).json(healthCheck);
  } catch (error) {
    res.status(503).json({ status: 'error', message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
