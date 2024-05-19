const Dotenv  = require('dotenv');
const express = require('express');
const  mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');

dotenv.config();

const app = express();

//connecting mongoose
mongoose.connect(process.env.MONGO_URL, {userNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.error(err));

//middleware
app.use(express.json());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));