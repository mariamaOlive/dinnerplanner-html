//ExampleView Object constructor
var SelectDishView= function (container, model) {
	
	var dishesOptions = container.find("#dishesOptions");
	this.dropdownMenu = container.find(".dropdown");



	var loadDishes= function(){

		//Get all the dishes by the type of course and loads on the screen 
		//ATTENTION: Modify to get the information of the dropbox menu
		var dishesByType= model.getAllDishes("main dish");
		
			for(var i=0; i<dishesByType.length; i++){
				dishesOptions.append( "<div class='col-md-3'>\
								<div class='thumbnail'>\
							      <img src=images/"+dishesByType[i].image+ 
							      "><div class='caption'>\
							        <h3>"+dishesByType[i].name+"</h3>\
							        <p>"+dishesByType[i].description+"</p>\
							      </div>\
							      </div>\
							    </div>");
			}
	}

	loadDishes();

}
