const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const session = require('express-session');
var ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const path = __dirname + "/views/";
const port = 8001;

var loginRouter = require('./route/login-route');
var dash = require('./route/main-dashroute');
app.use(session({
  secret : '12345',
  resave : false,
  saveUninitialized : true,
  cookie : {maxAge : 100000000000000000}
}));

app.use(function(req, res, next) {
  res.locals.mail = req.session.mail;
  next();
});

app.set('view engine', 'ejs');

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});
router.get("/inthreater", function (req, res) {
  res.sendFile(path + "inthreater.html");
});
router.get("/signin", function (req, res) {
  res.sendFile(path + "login.html");
});

router.get("/sign-in", function (req, res) {
  res.sendFile(path + "index.html");
});



app.use('/',loginRouter);
app.use('/', dash);
app.use(express.static(path));
app.use("/", router);

app.listen(port, function () {
  console.log( "App listening on port 8001..... ");
});