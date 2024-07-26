require('dotenv').config();
const connectDB = require('./config/database');
const express = require('express');
const ProductRouter = require('./routes/product');
const path = require('path');
const cors = require('cors');

const server = express();

// Middleware to parse JSON bodies
server.use(express.json());
server.use(cors());

// API routes
server.use('/api', ProductRouter);

// Serve static files from the build directory
const buildPath = path.resolve(__dirname, 'build');
server.use(express.static(buildPath));

// Serve React app for all other routes
server.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Connect to database
connectDB();

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
