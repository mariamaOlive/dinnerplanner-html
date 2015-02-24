
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
        
	});

	view.container.on("mouseleave",".itemMenu",function(){

		$(this).toggleClass("itemMenuHover" );
        
	});

	 //itemList.hover(function(){

	 	

	 //},function(){


	 //});



}
