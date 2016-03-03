var initialHouses = [
		{

			houseSrc: 'img/visualizer/House_Green.jpg',
			buttonSrc: 'img/visualizer/buttons/green.png'
		},

		{

			houseSrc: 'img/visualizer/House_Stone.jpg',
			buttonSrc: 'img/visualizer/buttons/stone.png'
		},

		{

			houseSrc: 'img/visualizer/House_Brown.jpg',
			buttonSrc: 'img/visualizer/buttons/brown.png'
		},

		{

			houseSrc: 'img/visualizer/House_Red.jpg',
			buttonSrc: 'img/visualizer/buttons/red.png'
		},

		{

			houseSrc: 'img/visualizer/House_Charcoal.jpg',
			buttonSrc: 'img/visualizer/buttons/charcoal.png'
		},

		{

			houseSrc: 'img/visualizer/House_White.jpg',
			buttonSrc: 'img/visualizer/buttons/white.png'
		},

		{

			houseSrc: 'img/visualizer/House_Blue.jpg',
			buttonSrc: 'img/visualizer/buttons/blue.png'
		},

		{

			houseSrc: 'img/visualizer/House_Beige.jpg',
			buttonSrc: 'img/visualizer/buttons/beige.png'
		},

		{

			houseSrc: 'img/visualizer/House_Gray.jpg',
			buttonSrc: 'img/visualizer/buttons/gray.png'
		},

		{

			houseSrc: 'img/visualizer/House_Slate.jpg',
			buttonSrc: 'img/visualizer/buttons/slate.png'
		},

		{

			houseSrc: 'img/visualizer/House_Tan.jpg',
			buttonSrc: 'img/visualizer/buttons/tan.png'
		}
	];

var House = function(data) {

	this.houseSrc = ko.observable(data.houseSrc);
	this.buttonSrc = ko.observable(data.buttonSrc);


};

var ViewModel = function() {
	var self = this;

	this.houseList = ko.observableArray([]);

	initialHouses.forEach(function(houseItem) {
		self.houseList.push( new House(houseItem));
	});

	this.currentHouse = ko.observable(this.houseList() [0] );

	this.setHouse = function(clickedHouse) {
		self.currentHouse(clickedHouse);
	};

	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
}

ko.applyBindings(new ViewModel());