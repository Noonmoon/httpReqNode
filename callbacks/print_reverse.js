var imp = require('./getHTML.js')
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var print = function printHTML (html) {
  console.log(html.split('').reverse().join(''));
}


imp.printHTML(requestOptions, print)