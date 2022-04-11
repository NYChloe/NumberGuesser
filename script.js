let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () =>{
    return Math.floor(Math.random()*10)
};

const compareGuesses = (humanGuess,computerGuess,secretNum) =>{
  let humanDiff= Math.abs(secretNum - humanGuess)
  let computerDiff = Math.abs(secretNum - computerGuess)
 
  return humanDiff <= computerDiff;
   
};

const updateScore = winner =>{
    if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};
const advanceRound = ()=>currentRoundNumber+=1