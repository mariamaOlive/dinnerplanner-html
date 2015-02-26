var HomeView= function (container , model){

	this.btnCreateDinner=  container.find("#btnCreate");
	this.container= container;
	this.nextPage= container.parent().find("#selectDishList");
	this.nextPage2=container.parent().find("#left-cost");
	this.nextPage3=container.parent().find("#pageSelectDish");

	//Setting this page as the first to appear on the screen 
	container.show();


}