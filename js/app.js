$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"),model);
	var selectDishView = new SelectDishView($("body"),model);
	var numberGuestsView =  new NumberGuestsView($("body"),model);
	//var dinnerPreaparationView= new DinnerPreparationView($("#dinnerPreparation"), model);
	//var dinnerOverviewView= new DinnerOverviewView($("#dinnerOverview"), model);
	//var recipeDetailsView= new RecipeDetailsView($("#recipeDetails"), model);
    //test comment
	//Instanciating the controllers
	//it mariama here
	var numberGuestsCtrl =  new NumberGuestsCtrl(numberGuestsView, model);

});