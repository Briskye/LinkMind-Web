require("dotenv").config();

const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* EMAIL CONFIG */
const resend = new Resend(process.env.RESEND_API_KEY);

/* API ROUTE */
app.post("/send-email", async (req, res) => {

  try {

    const { name, phone, email, message } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "john@linkmind.co.jp",
      subject: "New Contact Form Submission",

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone Number:</strong> ${phone}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    });

    
    res.status(200).json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});
