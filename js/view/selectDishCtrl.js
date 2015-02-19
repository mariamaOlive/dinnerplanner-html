var SelectDishCtrl=function(view, model){
var dropdownList = view.dropdownMenu.find(".dropdown-menu li a");
var dropdownText = view.dropdownMenu.find(".btn:first-child");
	
	dropdownList.click(function(){
		dropdownText.text($(this).text());
		dropdownText.val($(this).text());

	});

};