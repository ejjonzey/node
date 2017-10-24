var request = require('request');

var s = request('http://pluralsight.com/');

s.pipe(process.stdout);