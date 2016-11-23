describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should return a vowelless string', function() {
		var string = 'this is a string';
		var results = $filter('removeAllVowels')(string);
		expect(results).toEqual('ths s  strng');
	});

});
