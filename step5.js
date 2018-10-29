const https = require('https');

module.exports = {
  printHTML: function getAndPrintHTML(options, callback) {
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
};

