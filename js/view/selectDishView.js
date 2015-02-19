//ExampleView Object constructor
var SelectDishView= function (container, model) {
	
	var dishesOptions = container.find("#dishesOptions");
	this.dropdownMenu = container.find(".dropdown");



	this.loadDishes= function(dishType){

		//Get all the dishes by the type of course and loads on the screen 
		//ATTENTION: Modify to get the information of the dropbox menu
		var dishesByType= model.getAllDishes(dishType);

		dishesOptions.html("");
		
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

     //this.update= function(){
		//loadDishes();
	//}

	//model.addObserver(this);
	this.loadDishes("starter");

}
