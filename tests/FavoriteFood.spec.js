describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should return the favorite food', function() {
		var peopleFoods = [
			{name: 'Traci', favoriteFood: 'ice cream'},
			{name: 'Bryan', favoriteFood: 'burgers'},
			{name: 'Bob', favoriteFood: 'fava beans'},
			{name: 'Steve', favoriteFood: 'carrots'}
		];
		var results = $filter('favoriteFood')(peopleFoods, 'ice cream');
		expect(results[0].name).toBe('Traci');

	});


});
