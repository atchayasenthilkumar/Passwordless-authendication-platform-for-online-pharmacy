**node.js**
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/online-pharmacy', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the User model
const User = mongoose.model('User', {
  email: String,
  name: String,
  magicLink: String,
});

// Generate a magic link for the user
const generateMagicLink = (user) => {
  const magicLink = crypto.randomBytes(32).toString('hex');
  user.magicLink = magicLink;
  return magicLink;
};

// Send the magic link to the user's email
const sendMagicLink = (user, magicLink) => {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, secure: false, // or 'STARTTLS'
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: user.email,
    subject: 'Login to Online Pharmacy',
    text: `Click on this link to login: http://localhost:3000/login/${magicLink}`,
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Login route
app.get('/login/:magicLink', (req, res) => {
  const magicLink = req.params.magicLink;
  User.findOne({ magicLink }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error'); } else if (!user) {
      res.status(401).send('Invalid magic link');
    } else {
      // Login successful, redirect to dashboard
      res.redirect('/dashboard');
    }
  });
});

// Dashboard route
app.get('/dashboard', (req, res) => {
  res.send('Welcome to the dashboard!');
});

// Register route
app.post('/register', (req, res) => {
  const { email, name } = req.body;
  const user = new User({ email, name });
  const magicLink = generateMagicLink(user);
  sendMagicLink(user, magicLink);
  user.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send('Registration successful!');
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
