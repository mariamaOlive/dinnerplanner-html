var SelectDishCtrl=function(view, model){
var dropdownList = view.dropdownMenu.find(".dropdown-menu li a");
var dropdownText = view.dropdownMenu.find(".btn");
var searchBoxButton=  view.searchBox.find("#btnSearch");
var searchBoxText= view.searchBox.find(".form-control");


	
	dropdownList.click(function(){
		dropdownText.html($(this).text()+"<span class='caret'></span>");
		view.loadDishes($(this).text());
		searchBoxText.val("");
	});

	searchBoxButton.click(function(){
		var text= searchBoxText.val();
		var dishType= dropdownText.text();
		view.loadDishes(dishType, text);
	});

	//Implement the action later of selecting the dish and call the function model.setIdDish();

};