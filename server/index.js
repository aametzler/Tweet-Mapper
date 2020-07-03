require('dotenv').config();
const express = require('express');
const app = express();
const chalk = require('chalk');
const Twit = require('twit')
const router = express.Router();
const port = process.env.PORT || 5000;
// ===== CONFIG/MIDDLEWARE =====

//setup server to accept JSON objects
app.use(express.json());
console.log('process.env: ', process.env.PORT)
const TwitterAPI = new Twit({
    consumer_key:         process.env.CONSUMER_KEY || '...',
    consumer_secret:      process.env.CONSUMER_SECRET || '...',
    access_token:         process.env.ACCESS_TOKEN || '...',
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET || '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  })


app.get('', (req, res) => {
    let stream = TwitterAPI.stream('statuses/filter', { track: 'mango' })
 
    stream.on('tweet', function (tweet) {
    console.log(tweet)
})
    res.send('hello express');
})

app.listen(port, () => {
    console.log(chalk.green('server us up on port ', port));
  })