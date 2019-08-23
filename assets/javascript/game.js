//Create an array of words
var dogs = ["chihuahua", "beagle", "yorkie", "husky", "poodle", "corgi", "whippet", "collie"]
//Choose the current word randomly
var randomNum = Math.floor(Math.random() * dogs.length);
var currentWord = dogs[randomNum];
console.log(currentWord);

//Make underscores matching the word length
var placeHolder = []
for (var i = 0; i < currentWord.length; i++) {
    console.log("-");
    placeHolder.push("-");
}
console.log(placeHolder);

//Put placeHolder in website as text
var dashDiv = document.getElementById("placeholders");
dashDiv.textContent = placeHolder.join(" ");


//Get user's guess (letter)
//Check if guessed letter is right
//If right, push to right array
//If wrong, push to wrong array