const computerChoice = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button'); // corrected typo
let userChoice; // global
let comchoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { // corrected typo
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResunt()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +  1
    //console.log(randomNumber)
    
    if(randomNumber === 1)
    {
        comchoice = 'rock'
    }
    if(randomNumber === 2)
    {
        comchoice = 'scissors'
    }
    if(randomNumber === 3)
    {
        comchoice = 'paper'
    }
    computerChoice.innerHTML = comchoice

}

function getResunt()
{
    if( comchoice === userChoice)
    {
        result = 'Its a DRAW!!!'
    }
    if( comchoice === 'rock' && userChoice === 'paper')
    {
        result = 'YOU WIN!!!'
    }

    if( comchoice === 'paper' && userChoice === 'scissors')
    {
        result = 'YOU WIN!!!'
    }
    if( comchoice === 'scissors' && userChoice === 'paper')
    {
        result = 'YOU LOOSE!!!'
    }

    if( comchoice === 'rock' && userChoice === 'scissors')
    {
        result = 'YOU LOOSE!!!'
    }
    
    if( comchoice === 'paper' && userChoice === 'rock')
    {
        result = 'YOU LOOSE!!!'
    }
    if( comchoice === 'scissors' && userChoice === 'rock')
    {
        result = 'YOU WIN!!!'
    }
    resultDisplay.innerHTML = result

}