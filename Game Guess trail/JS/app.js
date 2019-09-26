let randomNumber = Math.floor(Math.random()*100 +1);
console.log(randomNumber);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const errorMessage = document.querySelector('.errorMessage');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    errorMessage.innerHTML = "";
    // let errFlag = false;
    try{
        if (userGuess == ""){
            throw "  Cannot be blank";
        }
        if (isNaN(userGuess)){
            throw "  Text not allowed";
        }
        if (! Number.isInteger(userGuess)){
            throw "  Should be a Integer";
        }
        if (userGuess < 1 || userGuess > 100){
            throw "  Enter number between 1 to 100";
        }
    }
    catch(err){
        errorMessage.innerHTML = err;
        errorMessage.style.backgroundColor = 'Red';
        return;
    }  

    if (guessCount == 1){
        guesses.textContent = "Previous Guesses : ";
    }

    guesses.textContent += userGuess + ' ';

        if (userGuess == randomNumber){

            lastResult.textContent = 'Congratulations! You got it right';
            lastResult.style.backgroundColor = 'Green';
            lowOrHi.textContent = '';
            setGameOver();

        }
        else if (guessCount == 10){

            lastResult.textContent = 'Out of guesses, GAME OVER!!!'
            lastResult.style.backgroundColor = 'Blue';
            lowOrHi.textContent = '';
            setGameOver();
        }
        else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'Red';
            if(userGuess > randomNumber){
                lowOrHi.textContent = 'Guess is high!!'
            }
            else if (userGuess < randomNumber) {
                lowOrHi.textContent = 'Guess is low!!'
            }
        }
    guessCount++ ;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess );

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new Game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetPara = document.querySelectorAll('.resultPara p');
    for(i=0 ; i < resetPara.length; i++){
        resetPara[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'White';
    errorMessage.textContent = '';
    errorMessage.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random()*100 +1);
    console.log(randomNumber);
}