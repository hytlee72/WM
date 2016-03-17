var initialHouses = [
		{
			house1Src: 'img/visualizer/house1/house1-stone-min.jpg',
			house2Src: 'img/visualizer/house2/House_Green-min.jpg',
			buttonSrc: 'img/visualizer/buttons/green.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Stone-min.jpg',
			buttonSrc: 'img/visualizer/buttons/stone.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Brown-min.jpg',
			buttonSrc: 'img/visualizer/buttons/brown.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Red-min.jpg',
			buttonSrc: 'img/visualizer/buttons/red.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Charcoal-min.jpg',
			buttonSrc: 'img/visualizer/buttons/charcoal.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_White-min.jpg',
			buttonSrc: 'img/visualizer/buttons/white.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Blue-min.jpg',
			buttonSrc: 'img/visualizer/buttons/blue.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Beige-min.jpg',
			buttonSrc: 'img/visualizer/buttons/beige.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Gray-min.jpg',
			buttonSrc: 'img/visualizer/buttons/gray.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Slate-min.jpg',
			buttonSrc: 'img/visualizer/buttons/slate.png'
		},

		{

			house2Src: 'img/visualizer/house2/House_Tan-min.jpg',
			buttonSrc: 'img/visualizer/buttons/tan.png'
		}
	];

var House = function(data) {

	this.house1Src = ko.observable(data.house1Src);
	this.house2Src = ko.observable(data.house2Src);
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
};


ko.applyBindings(new ViewModel());