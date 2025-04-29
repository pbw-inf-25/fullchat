const express = require('express');
const app = express();
const path = require('path');

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Example: If you want to serve the main page manually
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
