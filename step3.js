var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML(options) {
  https.get(options, function(resp) {
    resp.setEncoding('utf8');
    var body = '';
    resp.on('data', function(chunks) {
      body += chunks;
    });
    resp.on('end', function(chunks) {
      console.log(body + '\nStream finished')
    });
  });
}

getAndPrintHTML(requestOptions)