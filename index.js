const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require("./Routers/userReg");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Pages', 'register.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
