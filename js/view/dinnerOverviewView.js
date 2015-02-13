var DinnerOverviewView= function (container, model) {
	
	var numberOfGuestsScreen = container.find("#numberGuests");
	var dishPictureScreen= container.find("#dishes");
	var costScreen=container.find("#total-cost");
	

	var loadOverview= function(){
		numberOfGuestsScreen.html("<p>My Dinner: "+model.getNumberOfGuests()+" People</p>");
		var dishList = model.getFullMenu();
		var dishCost = model.getMenuPriceByRecipe();
		var totalCost= model.getTotalMenuPrice();
		//load all the menu on the screen	

		for(var i=0; i<dishList.length; i++){
		dishPictureScreen.append("<div class='col-md-4'><div class='thumbnail'>"+
									"<img src='images/"+dishList[i].image+
									"'><div class='caption'>"+
								        "<h3>"+dishList[i].name+"</h3>"+
								      "</div></div>"+
								    "<p class='rightText'>"+dishCost[i]+"</p>"+
								"</div>");	
		}	

		costScreen.html("<p>Total: "+totalCost+"</p>");

	}

	loadOverview();
}