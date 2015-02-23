var DinnerPreparationView= function (container, model) {
	
	var numberOfGuestsScreen = container.find("#numberGuests");
	var dishInfoScreen= container.find("#dishInfo");
	

	var loadPreparation= function(){
		//It loads the number of guest on the screen
		numberOfGuestsScreen.html("<p>My Dinner: "+model.getNumberOfGuests()+" People</p>");

		//It gets from the model the information of the dishes selected for the menu
		var dishList = model.getFullMenu();

		//it loads all the menu on the screen
		dishInfoScreen.html("");
		for(var i=0; i<dishList.length; i++ ){
			dishInfoScreen.append("<div class='row'><div class='col-md-3' id='dish-image'>\
				<img src='images/"+dishList[i].image+"' class='img-responsive' alt='Responsive image' id='dish-image'>\
				</div>\
				<div class='col-md-4' id='dish-info'>\
				<h2>"+dishList[i].name+"</h2>\
				<h5>"+dishList[i].description+"</h5>\
				</div>\
				<div class='col-md-5' id='dish-pre'>\
				<p> <h4>PREPARATION</h4>\
				<h5>"+dishList[i].description+"</h5></p>\
				</div></div>");					
		}
	}

	this.update = function(){
		loadPreparation();
	}
	//Adding the observer resposible for determing which dish is shown in the overview
	model.addObserver(this);
	loadPreparation();

	container.hide();
}