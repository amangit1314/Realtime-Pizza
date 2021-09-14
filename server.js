const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const PORT = process.env.PORT || 3100;

// geting the data
app.get("/", (req, res) => {
  res.render('home');
});

// set Templates engine
app.use(expressLayout);
app.set("views", path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

// listening the port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ....`);
});
