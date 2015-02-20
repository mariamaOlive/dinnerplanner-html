//ExampleView Object constructor
var SelectDishView= function (container, model) {
	
	this.dishesOptions = container.find("#dishesOptions");
	this.dropdownMenu = container.find(".dropdown");
	this.searchBox =  container.find("#searchBox");
	this.container=container;
	this.nextPage= container.parent().find("#pageRecipeDetails");
	this.dishesOptionsBtn;



	this.loadDishes= function(dishType, text){

		//Get all the dishes by the type of course and loads on the screen 
		var dishesByType;
		if (text===""){
			dishesByType= model.getAllDishes(dishType);
		}else{
			dishesByType= model.getAllDishes(dishType, text);
		}
		this.dishesOptions.html("");
		
			for(var i=0; i<dishesByType.length; i++){
				this.dishesOptions.append( "<div class='col-md-3'>\
								<div class='thumbnail' id='"+dishesByType[i].id+"'>\
							      <img src=images/"+dishesByType[i].image+ 
							      "><div class='caption'>\
							        <h3>"+dishesByType[i].name+"</h3>\
							        <p>"+dishesByType[i].description+"</p>\
							      </div>\
							      </div>\
							    </div>");

			}

		this.dishesOptionsBtn= container.find("div.thumbnail");
	

	}

     //this.update= function(){
		//loadDishes();
	//}

	//model.addObserver(this);
	this.loadDishes("starter");
	container.hide();

}
