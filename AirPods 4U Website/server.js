const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const discordWebhookUrl = 'https://discord.com/api/webhooks/1214356364474847272/_azh11nvhtTv7kWPw4rp-QYkSg4A3wLJJ8FGWhfz3gN6gyIdjEwNg4a4EoIwgSdqKNiR';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/discord-webhook', (req, res) => {
  const data = req.body;

  axios.post(discordWebhookUrl, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      res.status(response.status).send('Success');
    })
    .catch((error) => {
      res.status(500).send('Error: ' + error);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});