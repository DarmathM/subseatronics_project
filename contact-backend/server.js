import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";
import fetch, { Headers } from "node-fetch";

global.fetch = fetch;
global.Headers = Headers;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/contact", (req,res)=> res.send("OK"));
app.post("/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "darrendarmath@gmail.com",
      subject: subject || "Nouveau Message",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
        `
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3000, () => console.log("Server running"));