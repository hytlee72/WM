var initialBuildings = [
		{
			roofSrc: 'img/visualizer/office/roofs/roof_emerald.png',
			wallSrc: 'img/visualizer/office/walls/wall_emerald.png',
			house2Src: 'img/visualizer/house2/roof_emerald.png',
			buttonSrc: 'img/visualizer/buttons/emerald.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_stone.png',
			wallSrc: 'img/visualizer/office/walls/wall_stone.png',
			house2Src: 'img/visualizer/house2/roof_stone.png',
			buttonSrc: 'img/visualizer/buttons/stone.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_cocoa.png',
			wallSrc: 'img/visualizer/office/walls/wall_cocoa.png',
			house2Src: 'img/visualizer/house2/roof_cocoa.png',
			buttonSrc: 'img/visualizer/buttons/cocoa.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_rustic.png',
			wallSrc: 'img/visualizer/office/walls/wall_rustic.png',
			house2Src: 'img/visualizer/house2/roof_rustic.png',
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
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_gold.png',
			wallSrc: 'img/visualizer/office/walls/wall_gold.png',
			house2Src: 'img/visualizer/house2/roof_gold.png',
			buttonSrc: 'img/visualizer/buttons/gold.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_harbor.png',
			wallSrc: 'img/visualizer/office/walls/wall_harbor.png',
			house2Src: 'img/visualizer/house2/roof_harbor.png',
			buttonSrc: 'img/visualizer/buttons/harbor.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_fern.png',
			wallSrc: 'img/visualizer/office/walls/wall_fern.png',
			house2Src: 'img/visualizer/house2/roof_fern.png',
			buttonSrc: 'img/visualizer/buttons/fern.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_colony.png',
			wallSrc: 'img/visualizer/office/walls/wall_colony.png',
			house2Src: 'img/visualizer/house2/roof_colony.png',
			buttonSrc: 'img/visualizer/buttons/colony.jpg'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_patriot.png',
			wallSrc: 'img/visualizer/office/walls/wall_patriot.png',
			house2Src: 'img/visualizer/house2/roof_patriot.png',
			buttonSrc: 'img/visualizer/buttons/patriot.jpg'
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