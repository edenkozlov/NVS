require('dotenv').config(); // Ensure environment variables are loaded
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for handling form submissions
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, companyName, email, phone, message } = req.body;

  // Validate data (basic validation)
  if (!firstName || !lastName || !email || !message) {
    console.log('Missing required fields:', req.body); // Debug log
    return res.status(400).json({ error: 'Required fields are missing' });
  }

  // Nodemailer transport configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Set to false because port 587 is not secure
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'TLSv1.2', // Ensuring a more secure cipher
      rejectUnauthorized: false, // Allows self-signed certificates (if applicable)
    },
  });
  
  
  

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'your-email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err); // Log full error
      return res.status(500).json({ error: `Failed to send email: ${err.message}` });
    }
    console.log('Email sent:', info);
    res.status(200).json({ message: 'Form submitted successfully!' });
  });
  
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
