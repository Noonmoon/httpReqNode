var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML(options, callback) {
  https.get(options, function(resp) {
    resp.setEncoding('utf8');
    var body = '';
    resp.on('data', function(chunks) {
      body += chunks;
    });
    resp.on('end', function(chunks) {
      return callback(body);
    });
  });
}

var print = function printHTML (html) {
  console.log(html);
}

getAndPrintHTML(requestOptions, print)


