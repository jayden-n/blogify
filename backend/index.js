const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const cors = require('cors');
const authController = require('./controllers/authController');
const blogController = require('./controllers/blogController');
const multer = require('multer');
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
// Routes
app.use('/images', express.static('public/images'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authController);
app.use('/blog', blogController);

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage: storage,
});

app.post('/upload', upload.single('image'), async (req, res) => {
  return res.status(200).json({ msg: 'Successfully uploaded' });
});
// Connect server
app.listen(process.env.PORT || 5001, () => {
  console.log('Server has been started!');
});
