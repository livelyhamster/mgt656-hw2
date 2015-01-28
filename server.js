var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!  Really!');
});
app.get('/nickname', function(request, response){
    response.send('lively-hamster');
});
app.listen(process.env.PORT || 4000);