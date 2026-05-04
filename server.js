require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

/* EMAIL CONFIG */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* API ROUTE */
app.post("/send-email", async (req, res) => {
  console.log("Request received:", req.body);
  const { name, phone, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: "martinmendoza03.mm@gmail.com",
      to: "john@linkmind.co.jp",
      subject: "LinkMind Message",

      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px;">

          <h2>LinkMind Message</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>

        </div>
      `
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});
    
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});