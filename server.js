const express = require('express');
const request = require('request');
const server = express();
const port = 5000;

server.get('/:city/:country/:weatherApi_key', function(req,res){

  const weatherURL=`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city},${req.params.country}&appid=${req.params.weatherApi_key}&units=Metric`;
  const weatherURL1=`http://apiopenweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${req.params.weatherApi_key}&units=Metric`;



  if(city&&country){

    request(weatherURL, function(error, response, body) {
          if(error) {
            res.status(500);
            res.send();
            return;
          }
          res.send(body);
        });
  }else if(city && !country){
    request(weatherURL1, function(error, response, body) {
          if(error) {
            res.status(500);
            res.send();
            return;
          }
          res.send(body);
        });
   }
});
