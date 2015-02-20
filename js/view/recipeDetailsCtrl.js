var RecipeDetailsCtrl = function(view, model){
	var confirmBtn = view.btnConfirm;
    
    confirmBtn.click(function(){


    	//var idDish=view.idDish; make this work when connect the selectDish page and recipeDetailPage
    	model.addDishToMenu(1);
    	
    });

}