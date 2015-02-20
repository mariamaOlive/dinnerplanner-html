var HomeView= function (container , model){

	this.btnCreateDinner=  container.find("#btnCreate");
	this.container= container;
	this.nextPage= container.parent().find("#pageSelectDish");

	//Setting this page as the first to appear on the screen 
	container.show();


}