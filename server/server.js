const express = require('express');
const path = require('path');

const PUBLICPATH = path.join(__dirname, '../client/public');
const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(PUBLICPATH));


// app.get('/', (req, res) => {
//   res.send('Hello Ask!');
// });

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
