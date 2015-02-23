var RecipeDetailsCtrl = function(view, model){
	var confirmBtn = view.btnConfirm;
	var backBtn = view.btnBack;

    confirmBtn.click(function(){
    	//var idDish=view.idDish; make this work when connect the selectDish page and recipeDetailPage
        model.setListStatus(false);
    	model.addDishToMenu(model.getDishId());
    	//Going back to the selectDish page
    	view.container.hide();
    	view.nextPage.show();
 
    });



    backBtn.click(function(){
        model.setListStatus(false);
    	view.container.hide();
    	view.nextPage.show();
        
    });

}