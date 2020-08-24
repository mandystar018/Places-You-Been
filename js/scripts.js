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



// addressBook.addContact(contact);
// addressBook.addContact(contact2);
// addressBook.addContact(contact3);

let placesVisited = new PlacesVisited();
let place = new Place("Switzerland", "Schilltorn Mountain", "September, 2003", "Ate cheese and bread on top of the mountain");
let place2 = new Place("New Zealand", "Wellington", "February, 2019", "Saw a kiwi");

placesVisited.addPlace(place);
placesVisited.addPlace(place2);
console.log (place);

$(document).ready(function(){

});

