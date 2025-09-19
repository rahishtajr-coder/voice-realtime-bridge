import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));

// Begrüßung – wenn ein Anruf reinkommt
app.post("/voice", (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say(
    { language: "de-DE", voice: "alice" },
    "Hallo und herzlich willkommen in der Praxis. Bitte sagen Sie kurz, wie wir Ihnen helfen können."
  );

  res.type("text/xml");
  res.send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
