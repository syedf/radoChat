/**
 * Created by syedf on 2/8/2016.
 */
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty(),
    open = require('opn');
//configure server
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('port', 80);
//Error Middleware
//app.use(function (err, req, res) {
//    console.error(err.stack);
//    res.status(500).send('Something broke!');
//});

require('./socketController')(io);

app.get('/',function (req, res) {
    // Server index page
    res.sendFile(__dirname+'/public/index.html');
});
app.post('/upload', multipartyMiddleware, function (req, res) {
   console.log(req.files.file);
});
app.get('/*',function (req, res) {
    // Server index page used to remove '#' from urls
    res.sendFile(__dirname+'/public/index.html');
});
http.listen(app.get('port'), function () {
    console.log('Listening to port '+app.get('port'));
    open('http://localhost',{app:'chrome'});
});


