var NumberGuestsView= function (container, model) {
	
	var dishListEnd= container.find("hr");
	var costListScreen= container.find("#costList");
	var itensMenuScreen = container.find("#listMenu")
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

		var oldItens= container.find(".itemMenu");
		oldItens.remove();

		var oldItens= container.find(".pending");
		oldItens.remove();

		for(var i=0; i<dishList.length; i++){
			dishListEnd.before(
							"<div class='row itemMenu' >\
								<div class='col-xs-8' id='dishList'>\
									<p>"+numberOfGuests+"  "+dishList[i].name+"</p>\
								</div>\
								<div class='col-xs-2' id='costList'>\
									<p>"+priceList[i]*numberOfGuests+"</p>\
								</div>\
								<div class='col-xs-2'>\
									<span id='"+dishList[i].id+"' class='glyphicon glyphicon-remove-circle'></span>\
								</div>\
							</div>");
		}

		var valuePending;
		var btn=container.find("#btnConfirm");
		
		//Resolve the situation if a dish is selected but it is still pending 
		if(model.getListStatus()){
			//if it is still pending in recipeDetail page
			var dishId=model.getDishId();
			valuePending=model.getPriceByRecipe(dishId)*model.getNumberOfGuests();

			//Disabling the button of confirmingDinner
			btn.prop('disabled', true);
			
		}else{
			//back to the dishList 
			valuePending=0;
			//Enabling the button of confirmingDinner
			btn.prop('disabled', false);
		}

		//Pending values inserted in the html tree
		//dishListScreen.append("<p>Pending</p>");
		//add on the html file the price of each dish multipled by the number of guests
		//costListScreen.append("<p>"+valuePending+"</p>");

			dishListEnd.before("<div class='row pending' >\
								<div class='col-xs-8' id='dishList'>\
									<p>Pending</p>\
								</div>\
								<div class='col-xs-2' id='costList'>\
									<p>"+valuePending+"</p>\
								</div>\
							</div>");

		var totalCost=model.getTotalMenuPrice()+valuePending;
		//Final cost of the dinner
		finalCostScreen.html("<p id='finalCostText'>SEK "+totalCost+"</p>");


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