require('dotenv').config();
const app = require('./app');

// Bind to port to start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});