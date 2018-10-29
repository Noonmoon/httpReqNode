var imp = require('./step5.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};
var print = function printHTML (html) {
  console.log(html);
}

imp.printHTML(requestOptions, print)