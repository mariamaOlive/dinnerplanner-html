var HomeView= function (container , model){

	this.btnCreateDinner=  container.find("#btnCreate");
	this.container= container;
	this.nextPage= container.parent().find("#selectDishList");
	this.nextPage2=container.parent().find("#left-cost");

	//Setting this page as the first to appear on the screen 
	container.show();


}