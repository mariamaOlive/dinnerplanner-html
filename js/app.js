$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//views
	var selectDishView = new SelectDishView($("#pageSelectDish"),model);
	var numberGuestsView =  new NumberGuestsView($("#pageSelectDish"),model);
	var dinnerPreaparationView= new DinnerPreparationView($("#pageDinnerPreparation"), model);
	var dinnerOverviewView= new DinnerOverviewView($("#pageDinnerOverview"), model);
	var recipeDetailsView= new RecipeDetailsView($("#pageRecipeDetails"), model);


	//controllers
	var numberGuestsCtrl =  new NumberGuestsCtrl(numberGuestsView, model);
	var selectDishCtrl= new SelectDishCtrl(selectDishView,model);
	var receipeDetailsCtrl= new RecipeDetailsCtrl(recipeDetailsView,model);

});