const Twitter = require('twitter');
// Twitter obj to send for authentication. 
const client = new Twitter({
  consumer_key: 'dEvicPhAR1B7d0ILLDHVbIdOq',
  consumer_secret: 'NESKjK2yesJkqRmBHdiVYuZthcSAHubn4cbVexKdC6YtowFRcE',
  access_token_key: '1113476976948412419-2vZS3lTWTj8uHdeZwK3eSmIZKScQ6L',
  access_token_secret: '7PpqQARBWq0g3RB2U5Yk8sHouyh7jrZ3r4yJsxvAQXJU3'
});

exports.client = client; 

