var HomeView= function (container , model){

	var btnCreateDinner=  container.find("#btnCreate");
	this.container= container;
	this.nextPage= container.parentNode.find("#pageSelectDish");

	//Setting this page as the first to appear on the screen 
	container.show();


}