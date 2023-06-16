const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const cors = require('cors');
// Helps backend and client communicate
// Port: 5000 - backend
// Client: 3000 - client

const app = express();

// Connect db

mongoose.set('strictQuery', false);

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB has been started!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
connectToMongo();

// Connect server
app.listen(process.env.PORT || 5001, () => {
  console.log('Server has been started!');
});