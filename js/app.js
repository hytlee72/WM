var initialBuildings = [
		{
			roofSrc: 'img/visualizer/office/roofs/roof_green.png',
			wallSrc: 'img/visualizer/office/walls/wall_green.png',
			house2Src: 'img/visualizer/house2/House_Green-min.jpg',
			buttonSrc: 'img/visualizer/buttons/green.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_stone.png',
			wallSrc: 'img/visualizer/office/walls/wall_stone.png',
			house2Src: 'img/visualizer/house2/House_Stone-min.jpg',
			buttonSrc: 'img/visualizer/buttons/stone.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_brown.png',
			wallSrc: 'img/visualizer/office/walls/wall_brown.png',
			house2Src: 'img/visualizer/house2/House_Brown-min.jpg',
			buttonSrc: 'img/visualizer/buttons/brown.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_red.png',
			wallSrc: 'img/visualizer/office/walls/wall_red.png',
			house2Src: 'img/visualizer/house2/House_Red-min.jpg',
			buttonSrc: 'img/visualizer/buttons/red.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_charcoal.png',
			wallSrc: 'img/visualizer/office/walls/wall_charcoal.png',
			house2Src: 'img/visualizer/house2/House_Charcoal-min.jpg',
			buttonSrc: 'img/visualizer/buttons/charcoal.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_white.png',
			wallSrc: 'img/visualizer/office/walls/wall_white.png',
			house2Src: 'img/visualizer/house2/House_White-min.jpg',
			buttonSrc: 'img/visualizer/buttons/white.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_blue.png',
			wallSrc: 'img/visualizer/office/walls/wall_blue.png',
			house2Src: 'img/visualizer/house2/House_Blue-min.jpg',
			buttonSrc: 'img/visualizer/buttons/blue.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_beige.png',
			wallSrc: 'img/visualizer/office/walls/wall_beige.png',
			house2Src: 'img/visualizer/house2/House_Beige-min.jpg',
			buttonSrc: 'img/visualizer/buttons/beige.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_gray.png',
			wallSrc: 'img/visualizer/office/walls/wall_gray.png',
			house2Src: 'img/visualizer/house2/House_Gray-min.jpg',
			buttonSrc: 'img/visualizer/buttons/gray.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_slate.png',
			wallSrc: 'img/visualizer/office/walls/wall_slate.png',
			house2Src: 'img/visualizer/house2/House_Slate-min.jpg',
			buttonSrc: 'img/visualizer/buttons/slate.png'
		},

		{
			roofSrc: 'img/visualizer/office/roofs/roof_tan.png',
			wallSrc: 'img/visualizer/office/walls/wall_tan.png',
			house2Src: 'img/visualizer/house2/House_Tan-min.jpg',
			buttonSrc: 'img/visualizer/buttons/tan.png'
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
	var residentialButton = document.getElementById("residential");
	var commercialButton = document.getElementById("commercial");
	var roofButton = document.getElementById("setRoof");
	var wallButton = document.getElementById("setWall");
	var roofImg = document.getElementById("roofPic");
	var wallImg = document.getElementById("wallPic");
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