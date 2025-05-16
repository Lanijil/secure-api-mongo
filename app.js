require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();
connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/api', authRoutes);

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));