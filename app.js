var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname ));
app.get('/', function (req, res) {
    res.sendFile('index.html');
});

// app.use(express.static('dist'));
// app.get('/', function (req, res) {
//     //__dirname : It will resolve to your project folder.
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.listen(8080);
