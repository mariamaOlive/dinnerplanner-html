var SelectDishCtrl=function(view, model){
var dropdownList = view.dropdownMenu.find(".dropdown-menu li a");
var dropdownText = view.dropdownMenu.find(".btn");
var searchBoxButton=  view.searchBox.find("#btnSearch");
var searchBoxText= view.searchBox.find(".form-control");
var dishesOptions=  view.dishesOptionsBtn;



	
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


//Selecting one of the dishes
	view.container.on("click","div.thumbnail",function(){

		var id=parseInt($(this).attr("id"));
		model.setDishId(id);
		show(view.container, view.nextPage);
        
	});

	var show= function(shown, hidden){

		shown.hide();
		hidden.show();
	}
};