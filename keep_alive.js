const http = require('http');
   
function keepAlive() {
  const options = {
    host: process.env.PROJECT_DOMAIN + '.glitch.me',
    port: 80,
    path: '/'
  };
  
  http.get(options, function(res) {
    res.on('data', function() {});
    res.on('end', function() {
      console.log('Ping completed');
    });
  }).on('error', function(err) {
    console.log('Error during ping: ' + err.message);
  });
}

// Ping the application every 4 minutes to keep it awake
setInterval(keepAlive, 240000);

module.exports = { keepAlive };