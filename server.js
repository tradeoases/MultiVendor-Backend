const express = require('express');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Default port is 3000 if PORT environment variable is not set

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
