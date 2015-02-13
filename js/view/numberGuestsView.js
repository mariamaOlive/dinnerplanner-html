var NumberGuestsView= function (container, model) {
	
	var numberOfGuestsScreen = container.find("#numberOfGuests");
	var dishListScreen= container.find("#dishList");
	var costListScreen= container.find("#costList");
	var finalCostScreen= container.find("#finalCost");
	var numberOfGuests= model.getNumberOfGuests();

	var loadNumberGuests= function(){
		
				numberOfGuestsScreen.html(numberOfGuests);
	}

	var loadListDishes= function(){
		//var dishList = model.getFullMenu();
		//test delete afterwards
		var dishList = model.getFullMenu();
		var priceList= model.getMenuPriceByRecipe();

		for(var i=0; i<dishList.length; i++){
			dishListScreen.append("<p>"+numberOfGuests+"  "+dishList[i].name+"</p>");

			costListScreen.append("<p>"+priceList[i]*numberOfGuests+"</p>");

		}

		finalCostScreen.html("<p id='finalCostText'>"+model.getTotalMenuPrice()+"</p>");
	}

	loadNumberGuests();
	loadListDishes();
}