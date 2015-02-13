var NumberGuestsView= function (container, model) {
	
	var numberOfGuestsScreen = container.find("#numberOfGuests");
	var dishListScreen= container.find("#dishList");
	var costListScreen= container.find("#costList");
	var finalCostScreen= container.find("#finalCost");
	var numberOfGuests= model.getNumberOfGuests();

	//it loads on the screen the number of guests
	var loadNumberGuests= function(){
		
				numberOfGuestsScreen.html(numberOfGuests);
	}

	//it loads on the all the dish inserted in the menu
	var loadListDishes= function(){

		var dishList = model.getFullMenu();
		var priceList= model.getMenuPriceByRecipe();

		for(var i=0; i<dishList.length; i++){

			dishListScreen.append("<p>"+numberOfGuests+"  "+dishList[i].name+"</p>");

			//add on the html file the price of each dish multipled by the number of guests
			costListScreen.append("<p>"+priceList[i]*numberOfGuests+"</p>");

		}

		finalCostScreen.html("<p id='finalCostText'>"+model.getTotalMenuPrice()+"</p>");
	}

	loadNumberGuests();
	loadListDishes();
}