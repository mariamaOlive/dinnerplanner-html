$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"),model);
	//var selectDishView = new SelectDishView($("body"),model);
	var numberGestsView =  new NumberGuestsView($("body"),model);
	//var dinnerPreaparationView= new DinnerPreparationView($("body"), model);
	//var dinnerOverviewView= new DinnerOverviewView($("body"), model);
	var recipeDetailsView= new RecipeDetailsView($("body"), model);

});