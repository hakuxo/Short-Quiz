// Variables
const question = document.querySelector("#question");

// Timer
const timeR = document.querySelector("h4");
let seconds = 30;
timeR.innerHTML = `${seconds}`;
const countDown = setInterval(() =>{
seconds--;
timeR.innerHTML = `${seconds}`;
if (seconds <= 0 || seconds < 1) {
  clearInterval(countDown);
  return window.location.assign("./end/ending.html")
}
}, 1000);
// Questions
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let questions = [ 
// Question 1
{
question:"Can you kill skyes bird/flash?",
option1:"Absolutely",
option2:"No",
option3:"Only at a certain time",
option4:"Only with a certain weapon",
answer:"No",
},
// Question 2
{
  question:"Where is Raze from?",
  option1:"Dominican Republic",
  option2:"Puerto Rico",
  option3:"Brazil",
  option4:"Cuba",
  answer:"Brazil",
},
// Question 3
{
  question:"What valorant map has 3 sites?",
  option1:"Haven",
  option2:"Icebox",
  option3:"Aztec",
  option4:"Cobblestone",
  answer:"Haven",
},
// Question 4
{
  question:"Who isn't a Sentinel?",
  option1:"Sage",
  option2:"Cypher",
  option3:"Chamber",
  option4:"Brimstone",
  answer:"Brimstone",
},
// Question 5
{
  question:"Who says the voiceline 'Molly!'?",
  option1:"Brimstone",
  option2:"Breach",
  option3:"Pheonix",
  option4:"Kayo",
  answer:"Brimstone",
},
// Question 6
{
  question:"What type of agent is Kayo?",
  option1:"Initiator",
  option2:"Duelist",
  option3:"Controller",
  option4:"Sentinel",
  answer:"Initiator",
},
// Question 7
{
  question:"What map has a crab in sewer?",
  option1:"Breeze",
  option2:"Pearl",
  option3:"Haven",
  option4:"Lotus",
  answer:"Pearl",
},
// Question 8
{
  question:"What map is no longer in rotation?",
  option1:"Bind",
  option2:"Split",
  option3:"Icebox",
  option4:"Fracture",
  answer:"Bind",
},
// Question 9
{
  question:"How many rounds are needed to win an unrated?",
  option1:"6 Rounds",
  option2:"5 Rounds",
  option3:"13 Rounds",
  option4:"11 Rounds",
  answer:"13 Rounds",
},
// Question 10
{
  question:"What is the rarest knife skin?",
  option1:"Reaver Karambit",
  option2:"Celestial Fan",
  option3:"Xenohunter",
  option4:"Ruin Dagger",
  answer:"Ruin Dagger",
},
];

// Starting the game


// Progress bar js 
const progressBarContainer = document.querySelector('.progress-bar__container');
const progressBar = document.querySelector('.progress-bar');
const progressBarText = document.querySelector('.progress-bar__text');

const progressBarStates = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let time = 0;
let endState = 100;

progressBarStates.forEach(state => {
  let randomTime = Math.floor(Math.random() * 3000);
  setTimeout(() => {
    if(state == endState){
      gsap.to(progressBar, {
        x: `${state}%`,
        duration: 2,
        backgroundColor: '#4895ef',
        onComplete: () => {
          progressBarText.style.display = "initial";
          progressBarContainer.style.boxShadow = '0 0 5px #4895ef';
        }
      });
    }else{
      gsap.to(progressBar, {
        x: `${state}%`,
        duration: 2,
      });
    }
  }, randomTime + time);
  time += randomTime;
})