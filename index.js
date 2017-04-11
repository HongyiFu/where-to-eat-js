var startShowingRestaurant = function(){
	restaurants = ["nasi kukus", "holycow", "some shit place", "glomac", "pedas2"];
	startShow = setInterval(function(){
		r = document.getElementById("restaurant");
		r.innerHTML = restaurants[Math.floor((Math.random())*restaurants.length)];}, 300);
}

// function startShowingRestaurant(){
// 	startBtn.addEventListener 
// }

function stopShowing(){
	clearInterval(startShow);
	currentRestaurant = r.innerHTML;
	end_message = document.createElement("DIV");
	end_message.className = "center";
	end_message.innerHTML = currentRestaurant;
	document.body.appendChild(end_message);
}

function addRestaurantListener(){

  startBtn = document.getElementById('start-random-button');
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", startShowingRestaurant);

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", stopShowing);
}



// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);