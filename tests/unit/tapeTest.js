var test = require('tape');
var global = require('../../lib');

test('Exports window', function (t) {
  t.equal(global, window, 'is the global window?');
  t.end();
});

var hai = require('../../public/javascripts/hai2u.js');

test('hai test', function(t) {
	t.equal(document.getElementById('mypara').innerHTML, 'Yay my text', 'is the element inserted correctly?');
	t.end();
});