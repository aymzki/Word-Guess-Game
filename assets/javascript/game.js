//Create an array of words
var dogs = ["chihuahua", "beagle", "yorkie", "husky", "poodle", "corgi", "whippet", "collie"]
//Choose the current word randomly
var randomNum = Math.floor(Math.random()*dogs.length);
let currentWord = dogs[randomNum];
console.log(currentWord);
//Make underscores matching word length

//Get user's guess (letter)
//Check if guessed letter is right
//If right, push to right array
//If wrong, push to wrong array