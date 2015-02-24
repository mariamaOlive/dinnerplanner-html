
var NumberGuestsCtrl= function(view, model){
var confirmBtn=view.confirmBtn;
var itemList= view.container.find(".itemMenu");
	//Handling the event of adding a guest
	view.plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });
	 
	 view.minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });


	 confirmBtn.click(function(){

	    	view.pageSelectDish.hide();
	    	view.nextPage.show();

	 });

	view.container.on("mouseenter",".itemMenu",function(){

		$(this).toggleClass("itemMenuHover" );
		$(this).find(".glyphicon-remove-circle").css("display", "block");
        
	});

	view.container.on("mouseleave",".itemMenu",function(){

		$(this).toggleClass("itemMenuHover" );
		$(this).find(".glyphicon-remove-circle").css("display", "none");
        
	});

	view.container.on("click", ".glyphicon-remove-circle", function(){
		var id=parseInt($(this).attr("id"));
		model.removeDishFromMenu(id);
	});

}
