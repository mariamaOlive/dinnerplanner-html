
var NumberGuestsCtrl= function(view, model){
var confirmBtn=view.confirmBtn;
	//Handling the event of adding a guest
	view.plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });
	 
	 view.minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });


	 confirmBtn.click(function(){

	    	view.containerParent.hide();
	    	view.nextPage.show();

	 });

}
