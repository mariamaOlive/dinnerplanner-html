var DinnerOverviewCtrl= function(view, model){

var backBtn=view.goBackBtn;
var printBtn=view.printBtn;

backBtn.click(function(){

	view.container.hide();
	view.backPage.show();

});

printBtn.click(function(){

	view.container.hide();
	view.nextpage.show();


});

}