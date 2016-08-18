var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(planetsHMTL);
// create a function that creates a div element with an id of planets
function planetsHMTL(planet) {
    el.innerHTML += "<div id='planets'>" + planet + "</div>";
}

// Use the map method to create a new array where the first letter of each planet is capitalized
var planetsCap = planets.map(function(planet) {
    return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log(planetsCap);
// Use the filter method to create a new array that contains planets with the letter 'e'
var planetsFiltered = planets.filter(function(planet) {
    return planet.includes("e");
});
console.log(planetsFiltered);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var reducedSentence = words.reduce(function(prev, curr) {
    return prev + " " +curr;
})
console.log(reducedSentence);

