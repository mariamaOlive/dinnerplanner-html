var SelectDishCtrl=function(view, model){
var dropdownList = view.dropdownMenu.find(".dropdown-menu li a");
var dropdownText = view.dropdownMenu.find(".btn");
	
	dropdownList.click(function(){
		dropdownText.html($(this).text()+"&nbsp; &nbsp; &nbsp; &nbsp;\
		 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class='caret'></span>");
		view.loadDishes($(this).text());
	});


};