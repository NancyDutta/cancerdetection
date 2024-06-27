const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
