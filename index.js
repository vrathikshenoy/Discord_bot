const express = require("express");
const { Client, Intents } = require("discord.js");
const Moralis = require("moralis").default;
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.login(process.env.PASS);

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const { body, headers } = req;

  try {
    //  logging:
    console.log("Received webhook request:");
    console.log("Body:", body);
    console.log("Headers:", headers);

    const signature = headers["x-signature"];
    if (!signature) {
      console.error("Missing x-signature header");
      return res.status(400).json({ error: "Missing signature" });
    }

   /* Moralis.Streams.verifySignature({
      body: JSON.stringify(body), // Ensure body is stringified
   signature,
  });*/

    const from = body.txs[0].fromAddress;
    const amount = Number(body.txs[0].value / 1E18);

    const channel = await client.channels.fetch(process.env.CHANNEL);
    channel.send(`New Donation submitted by ${from}, for ${amount.toFixed(2)} MATIC!!!!`);

    return res.status(200).json();

  } catch (e) {
    console.error("Signature verification failed:", e);
    return res.status(400).json({ error: "Invalid signature", details: e.message });
  }
});

Moralis.start({
  apiKey: process.env.APIKEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening to streams on port ${port}`);
  });
});

