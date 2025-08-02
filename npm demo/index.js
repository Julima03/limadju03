const Sentiment = require('sentiment');
 const sentiment = new Sentiment();
 const result = sentiment.analyze('Cats are not happy.');
 console.log(result);
 // Score:-2, Comparative:-0.666

 