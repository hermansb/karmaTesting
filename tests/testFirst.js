
describe("A suite", function() {
	beforeEach(function() {
		var para = document.createElement("p");
		para.id = 'mypara';
		var text = document.createTextNode("Yay my text");
		para.appendChild(text);
		document.body.appendChild(para);	
	});

	afterEach(function() {
		document.body.removeChild(document.getElementById('mypara'));
	});

	it("contains spec with an expectation", function() {
		expect(document.getElementById('mypara').innerHTML).toBe('Yay my text');
	});
});