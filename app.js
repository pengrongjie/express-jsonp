var express = require('express');
var app = express();
app.listen(8888);

// app.get('/getinfo', function(req, res, next) {
//   var _callback = req.query.callback;
//   var _data = { email: 'example@163.com', name: 'jaxu' };
//   if (_callback){
//       res.type('text/javascript');
//       res.send(_callback + '(' + JSON.stringify(_data) + ')');
//   }
//   else{
//       res.json(_data);
//   }
// });

app.get('/getinfo',function  (req,res,next) {
    var _data = { email: 'example@163.com', name: 'jaxu' };
    res.type('application/json');
    res.jsonp(_data);
});
