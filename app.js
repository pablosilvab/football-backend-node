var express = require('express');
var app = express();

let PORT = 3000 || process.env.PORT;

app.get('/', (req, res)=> {
  res.send('Hello world!');
});

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});