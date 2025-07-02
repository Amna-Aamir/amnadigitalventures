const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// Serve static files (like HTML, CSS)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Handle form submission
app.post('/send', async (req, res) => {
  const {
    name,
    email,
    phone,
    service,
    message,
    business_name,
    business_type,
    website,
    location
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // your Gmail
      pass: process.env.EMAIL_APP_PASS        // your App password
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Consultation Request from ${name}`,
    html: `
      <h3>New Lead Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Interested:</strong> ${service}</p>
      <p><strong>Business Name:</strong> ${business_name}</p>
      <p><strong>Business Type:</strong> ${business_type}</p>
      <p><strong>Website / Social:</strong> ${website}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

