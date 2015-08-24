/* === Model === */

var initialMarket = [
		{
			icon: 'fa fa-fw fa-check',
			title: 'Fast results',
			content: 'Lose 2-5 lbs per week for the first two weeks and an average of 1-2 lbs per week thereafter.',
			buttonLink: 'http://www.nutritionj.com/content/9/1/11/abstract',
			buttonTitle: 'View Study'
		},

		{
			icon: 'fa fa-fw fa-check',
			title: 'Simple plans',
			content: 'Our weight loss plans are easy to follow and feature our Medifast Meals – delicious, convenient and easy to prepare.',
			buttonLink: '#',
			buttonTitle: 'Learn More'
		}

	];

/* === View === */

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);

	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.title = ko.computed(function(){
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Newborn';
		} else if (clicks < 50) {
			title = 'Infant';
		} else {
			title = 'Dead';
		}
		return title;
	}, this);
};

/* === VM === */

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList() [0] );

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());