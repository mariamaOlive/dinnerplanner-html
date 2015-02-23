var DinnerPreparationCtrl= function (view, model) {


var backBtn=view.backBtn;


	backBtn.click(function(){

		view.container.hide();
		view.nextPage.show();

	});

}