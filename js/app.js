$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//views
    var homeView= new HomeView($("#pageHome"),model);
	var selectDishView = new SelectDishView($("#selectDishList"),model);
	var numberGuestsView =  new NumberGuestsView($("#left-cost"),model);
	var dinnerPreparationView= new DinnerPreparationView($("#pageDinnerPreparation"), model);
	var dinnerOverviewView= new DinnerOverviewView($("#pageDinnerOverview"), model);
	var recipeDetailsView= new RecipeDetailsView($("#recipeDetails"), model);

	//controllers
	var homeCtrl= new HomeCtrl(homeView, model);
	var numberGuestsCtrl =  new NumberGuestsCtrl(numberGuestsView, model);
	var selectDishCtrl= new SelectDishCtrl(selectDishView,model);
	var receipeDetailsCtrl= new RecipeDetailsCtrl(recipeDetailsView,model);
	var dinnerOverviewCtrl= new DinnerOverviewCtrl(dinnerOverviewView,model);
	var dinnerPreparationCtrl= new DinnerPreparationCtrl(dinnerPreparationView,model);

});