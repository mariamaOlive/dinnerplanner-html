var RecipeDetailsCtrl = function(view, model){
	var confirmBtn = view.btnConfirm;
    
    confirmBtn.click(function(){

    	model.addDishToMenu(view.idDish);
    	
    });

}