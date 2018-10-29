var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-example/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function (chunks) {
      console.log('chunk length: ' + chunks.length + '\n' + chunks)
    });

    response.on('end', function() {
      console.log('stream completed.')
    });
  });
}

getAndPrintHTMLChunks()