// function getRestaurant(){
// 	document.getElementById('get-restaurant-button');

// }
keepGoing = true

var some_func = function() {
	restaurants = ["nasi kukus", "holycow", "some shit place", "glomac", "pedas2"];

		rand = Math.floor((Math.random())*restaurants.length);
		while (keepGoing) {
			console.log(1234);
		setTimeout(function(){
			console.log(1235);
			r = document.getElementById("restaurant");
			r.innerHTML = restaurants[rand];}, 300);
	}
}

// function startShowingRestaurant(){
// 	startBtn.addEventListener 
// }

function stopShowing(){
	keepGoing = false;
	r = document.getElementById("restaurant");
	r.innerHTML = "";
}

function addRestaurantListener(){

  startBtn = document.getElementById('start-random-button');
  console.log(startBtn);
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", some_func)

  // getBtn = document.getElementById('get-restaurant-button');
  
  // // Replace 'functionName' with the name of the function that you have written
  // getBtn.addEventListener("click", functionName);
}



// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);