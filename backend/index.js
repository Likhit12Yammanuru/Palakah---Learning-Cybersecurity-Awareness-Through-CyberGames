const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve static files from frontend/dist (Vite build output)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// For all other routes, return index.html (needed for react-router-dom with BrowserRouter)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
