var HomeCtrl = function(view, model){


	view.btnCreateDinner.click(function(){
    
       show(view.container, view.nextPage);

	});

	var show= function(shown, hidden){

		shown.hide();
		hidden.show();
	}
	
}