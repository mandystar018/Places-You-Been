//Business Logic
function PlacesVisited() {
  this.places = [];
  this.currentId = 0;
}

PlacesVisited.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

PlacesVisited.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


// Business Logic place
function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// User Interface Logic -------------------
let placesVisited = new PlacesVisited();
let place = new Place("Switzerland", "Schilthorn Mountain", "September, 2003", "Ate cheese and bread on top of the mountain");
let place2 = new Place("New Zealand", "Wellington", "February, 2019", "Saw a kiwi");
let place3 = new Place("Thailand", "Bangkok", "February, 2016", "Had a Thai Massage");
let place4 = new Place("Paris, France", "Eiffel Tower", "September, 2019", "Ate a Burger");

placesVisited.addPlace(place);
placesVisited.addPlace(place2);
placesVisited.addPlace(place3);
placesVisited.addPlace(place4);
// placesVisited.addPlace(place5);
// placesVisited.addPlace(place6);
// placesVisited.addPlace(place7);
// placesVisited.addPlace(place8);
// placesVisited.addPlace(place9);

console.log (place);
console.log (place2);
console.log (place3);
console.log (place4);

$(document).ready(function(){

});

