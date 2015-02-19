var NumberGuestsCtrl= function(view, model){

	//Handling the event of adding a guest
	view.plusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	 });
	 
	 view.minusButton.click(function(){
	 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	 });
}
