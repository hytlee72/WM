var initialHouses = [
		{

			houseSrc: 'img/Visualizer/House_Green.jpg',
			buttonSrc: 'img/Visualizer/Buttons/green.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Stone.jpg',
			buttonSrc: 'img/Visualizer/Buttons/stone.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Brown.jpg',
			buttonSrc: 'img/Visualizer/Buttons/brown.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Red.jpg',
			buttonSrc: 'img/Visualizer/Buttons/red.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Charcoal.jpg',
			buttonSrc: 'img/Visualizer/Buttons/charcoal.png'
		},

		{

			houseSrc: 'img/Visualizer/House_White.jpg',
			buttonSrc: 'img/Visualizer/Buttons/white.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Blue.jpg',
			buttonSrc: 'img/Visualizer/Buttons/blue.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Beige.jpg',
			buttonSrc: 'img/Visualizer/Buttons/beige.jpg'
		},

		{

			houseSrc: 'img/Visualizer/House_Gray.jpg',
			buttonSrc: 'img/Visualizer/Buttons/gray.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Slate.jpg',
			buttonSrc: 'img/Visualizer/Buttons/slate.png'
		},

		{

			houseSrc: 'img/Visualizer/House_Tan.jpg',
			buttonSrc: 'img/Visualizer/Buttons/Tan.png'
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