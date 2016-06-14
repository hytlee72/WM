var initialBuildings = [
		{
			roofSrc: 'img/visualizer/office/roofs/roof_green.png',
			wallSrc: 'img/visualizer/office/walls/wall_green.png',
			house2Src: 'img/visualizer/house2/roof_green.png',
			buttonSrc: 'img/visualizer/buttons/emerald.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_stone.png',
			wallSrc: 'img/visualizer/office/walls/wall_stone.png',
			house2Src: 'img/visualizer/house2/roof_stone.png',
			buttonSrc: 'img/visualizer/buttons/stone.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_brown.png',
			wallSrc: 'img/visualizer/office/walls/wall_brown.png',
			house2Src: 'img/visualizer/house2/roof_brown.png',
			buttonSrc: 'img/visualizer/buttons/cocoa.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_red.png',
			wallSrc: 'img/visualizer/office/walls/wall_red.png',
			house2Src: 'img/visualizer/house2/roof_red.png',
			buttonSrc: 'img/visualizer/buttons/rustic.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_charcoal.png',
			wallSrc: 'img/visualizer/office/walls/wall_charcoal.png',
			house2Src: 'img/visualizer/house2/roof_charcoal.png',
			buttonSrc: 'img/visualizer/buttons/charcoal.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_white.png',
			wallSrc: 'img/visualizer/office/walls/wall_white.png',
			house2Src: 'img/visualizer/house2/roof_white.png',
			buttonSrc: 'img/visualizer/buttons/white.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_blue.png',
			wallSrc: 'img/visualizer/office/walls/wall_blue.png',
			house2Src: 'img/visualizer/house2/roof_blue.png',
			buttonSrc: 'img/visualizer/buttons/blue.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_beige.png',
			wallSrc: 'img/visualizer/office/walls/wall_beige.png',
			house2Src: 'img/visualizer/house2/roof_beige.png',
			buttonSrc: 'img/visualizer/buttons/beige.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_gray.png',
			wallSrc: 'img/visualizer/office/walls/wall_gray.png',
			house2Src: 'img/visualizer/house2/roof_gray.png',
			buttonSrc: 'img/visualizer/buttons/gray.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_slate.png',
			wallSrc: 'img/visualizer/office/walls/wall_slate.png',
			house2Src: 'img/visualizer/house2/roof_slate.png',
			buttonSrc: 'img/visualizer/buttons/slate.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_tan.png',
			wallSrc: 'img/visualizer/office/walls/wall_tan.png',
			house2Src: 'img/visualizer/house2/roof_tan.png',
			buttonSrc: 'img/visualizer/buttons/tan.jpg'
		}
	];

var Building = function(data) {
	this.officeRoofSrc = ko.observable(data.roofSrc);
	this.officeWallSrc = ko.observable(data.wallSrc);
	this.houseSrc = ko.observable(data.house2Src);
	this.buttonSrc = ko.observable(data.buttonSrc);
};



var ViewModel = function() {
	var self = this;
	var residentialButton = document.getElementById("residential"),
		 roofButton = document.getElementById("setRoof"),
		 wallButton = document.getElementById("setWall"),
	 	 roofImg = document.getElementById("roofPic"),
		 wallImg = document.getElementById("wallPic");
	this.residentialSelected = ko.observable(true);
	this.commercialSelected = ko.observable(false);
	this.buildingList = ko.observableArray([]);
	this.roofSelected = ko.observable(true);
	this.wallSelected = ko.observable(false);

	initialBuildings.forEach(function(buildingItem) {
		self.buildingList.push( new Building(buildingItem));
	});

	this.currentBuilding = ko.observable(this.buildingList() [0] );

	this.setBuilding = function(clickedBuilding) {
		if (roofButton.checked){
    		roofImg.src = this.officeRoofSrc();
    	};
    	if (wallButton.checked) {
    		wallImg.src = this.officeWallSrc();
    	};
    	self.currentBuilding(clickedBuilding);
	};

	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
};


ko.applyBindings(new ViewModel());