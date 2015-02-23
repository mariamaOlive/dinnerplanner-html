var NumberGuestsView= function (container, model) {
	
	var dishListScreen= container.find("#dishList");
	var costListScreen= container.find("#costList");
	var finalCostScreen= container.find("#finalCost");
	var numberOfGuestsScreen = container.find("#numberOfGuests");
	this.minusButton= container.find("#minusGuest");
	this.plusButton= container.find("#plusGuest");
	this.confirmBtn= container.find("#btnConfirm");

	this.nextPage= container.closest("body").find("#pageDinnerOverview");
	this.container=container;
	this.pageSelectDish=container.closest("#pageSelectDish");


	//it loads on the screen the number of guests
	var loadNumberGuests= function(){
				numberOfGuests= model.getNumberOfGuests();
				numberOfGuestsScreen.html(numberOfGuests);
	}

	//it loads on the all the dish inserted in the menu
	var loadListDishes= function(){

		var dishList = model.getFullMenu();
		var priceList= model.getMenuPriceByRecipe();

		dishListScreen.html("");
		costListScreen.html("");


		for(var i=0; i<dishList.length; i++){

			dishListScreen.append("<p>"+numberOfGuests+"  "+dishList[i].name+"</p>");

			//add on the html file the price of each dish multipled by the number of guests
			costListScreen.append("<p>"+priceList[i]*numberOfGuests+"</p>");

		}

		finalCostScreen.html("<p id='finalCostText'>"+model.getTotalMenuPrice()+"</p>");
	}

	this.update= function(){
		loadNumberGuests();
		loadListDishes();
	}

	//First time that the view is initialised add an observer and set the number of guest to 0
	model.addObserver(this);
	numberOfGuests= model.setNumberOfGuests(1);
	container.hide();

}