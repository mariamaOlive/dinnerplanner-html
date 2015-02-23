
var NumberGuestsCtrl= function(view, model){
var confirmBtn=confirmBtn;
	//Handling the event of adding a guest
	view.plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });
	 
	 view.minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });


	 confirmBtn.click(function(){

	    	view.container.hide();
	    	view.nextPage.show();

	 });

}
