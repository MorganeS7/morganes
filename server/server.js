var express = require('express'),
    path = require('path'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Skill = require('./API/models/skills.js'),
    Website = require('./API/models/websites.js'),
    Contact = require('./API/models/contact.js'),
    bodyParser = require('body-parser');

var host        = process.env.VCAP_APP_HOST || process.env.HOST || 'localhost',
    port        = process.env.VCAP_APP_PORT || process.env.PORT || 3000,
    rootPath = path.normalize(__dirname + /../);

app.use(express.static(rootPath + 'app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
    res.sendFile('/index.html');
});

mongoose.Promise = global.Promise;
var url = 'mongodb://admin:12345@ds161455.mlab.com:61455/morgane';
mongoose.connect(url);


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./API/routes/routes.js');
routes(app);

app.listen(port, host);