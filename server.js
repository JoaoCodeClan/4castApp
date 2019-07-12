const express = require('express');
const request = require('request');
const server = express();
const port = 5000;

server.get('/:city/:country/:weatherApi_key', function(req,res){

  const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},${req.params.country}&appid=${req.params.weatherApi_key}&units=Metric`;

    request(weatherURL, function(error, response, body) {
          if(error) {
            res.status(500);
            res.send();
            return;
          }
          console.log("body")
          res.send(body);
        });

});


server.get('/:city/:weatherApi_key', function(req,res){
console.log("got on the back")
  const weatherURL=`http://apiopenweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${req.params.weatherApi_key}&units=Metric`;
  console.log(weatherURL);
    request(weatherURL, function(error, response, body) {
          if(error) {
            res.status(500);
            res.send();
            return;
          }
          console.log("body")
          res.send(body);
        });
});




server.listen(port,()=>console.log(`Server started on port${port}`));
