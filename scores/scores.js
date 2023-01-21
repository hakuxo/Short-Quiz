const scoreList = document.querySelector();
const highScores = JSON.parse(localStorage.getItem(highScores))

// Makes the list using the local storage and writing it onto the webpage
scoreList.innerHTML = highScores.map((score) =>{

});

// Function for clear button to clear local storage of highscores
document.querySelector("button").addEventListener("click", function() {
    localStorage.clear();
    scoreList.innerHTML = "";

});