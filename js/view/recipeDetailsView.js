var RecipeDetailsView= function (container, model) {
	
	var numberOfGuestsScreen = container.find("#title-list");
	var dishIngredientsScreen= container.find("#ingre-list");
	var costScreen=container.find("#total-costNumber");
	var dishName=container.find("#dish-name");
	var dishPicture=container.find("#dish-image");
	var dishDescription = container.find("#dish-intro");
	var dishPreparation= container.find("#dishPreparation");
	this.btnConfirm =  container.find("#confirm-btn");
	this.idDish;


	

	var loadRecipeDetails= function(id){

		idDish=id;
		var dish= model.getDish(id);
		var dishIngredients= dish.ingredients;
		var totalCost=0;

		//It loads the name of the recipe
		dishName.html("<h3>"+dish.name+"</h>");

		//It loads the picture of the recipe
		dishPicture.html("<img src='images/"+dish.image+"' class='img-responsive' alt='Responsive image'>");

		//It loads the recipe description
		dishDescription.html("<p>"+dish.description+"</p>");

		//It loads the recipe preparation
		dishPreparation.append("<p>"+dish.description+"</p>");

		//This code loads the content of the left layout related to the ingredients of the recipe
		numberOfGuestsScreen.html("<p><h5>INGREDIENTS FOR "+model.getNumberOfGuests()+" PEOPLE</h5></p>");
		
		//it loads recipe ingredients
		for(key in dishIngredients){

			totalCost+=dishIngredients[key].price;
			dishIngredientsScreen.append("<div class='row' id='dish-list'>"+
											"<div class='col-md-3'>"+dishIngredients[key].quantity+" "+dishIngredients[key].unit+"</div>"+
											"<div class='col-md-5'>"+dishIngredients[key].name+"</div>"+
											"<div class='col-md-2'>SEK</div>"+
											"<div class='col-md-2'>"+dishIngredients[key].price+"</div>"+
											"</div>");

		}
		//load total cost on the screen	
		costScreen.html(totalCost);
	}

	this.update = function(){
		loadRecipeDetails(model.getDishId());
	}

	//Adding the observer resposible for determing which dish is show the details
	model.addObserver(this);
	container.hide();
}


                                                 
                                                