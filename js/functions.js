const COLORS_ARRAY = ['blue', 'white', 'cyan', 'gold', 'green', 'gray', 'magenta', 'yellow', 'orange', 'red'];

function runGame() {
    let numTries = 0;
    let guess = "";
    let correct = false;
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    //console.log(targetIndex);
    let target = COLORS_ARRAY[targetIndex];
    console.log(target);
    let colorSplash = document.getElementsByClassName('container')[0];
    while (!correct) {
        COLORS_ARRAY.sort(); //a-z the list
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(', ') + '\n\n What color am I thinking of?\n');
        //console.log(guess);
        //if the user hits cancel on the prompt
        if (guess === null) {
            alert('Ok . . . I\'ll wait till you\'re ready ');
            return;
        }
        //correct = checkGuess(guess, target);  <---nonBonus answer
        correct = checkGuess(guess.toLowerCase(), target);
        numTries += 1; //keep track of number of tries
        alert ('This is your ' + numTries + ' attempt!'); //alert the user what try they are on
    }
    alert('Congratulations you guessed my color! It took you ' + numTries + ' tries!'); //user guessed the color
    colorSplash.style.backgroundColor = guess; //document.body.style.background = guess;
    //changes 'Pretty Please' button to 'Play Again'
    document.getElementById('gameContainerDiv').getElementsByClassName('betterButton')[0].innerText = 'Play Again!';
    //changes bg gif to will ferrel thumbs up
    document.getElementById('gameContainerDiv').style.background = "black url('https://media2.giphy.com/media/ZF3bEnWthZVEYzBeES/giphy.gif') no-repeat center ";
}

function checkGuess(guess, target) {
    //setting correct to false so it can be true when user guesses correctly
    let correct = false;
    //check the guess for array existence and give user some hints
    if (!COLORS_ARRAY.includes(guess)) {
        alert('Thats not a color in my list. Try again.');
    } else if (guess > target) {
        alert('Your color is later in the alphabet than mine!');
    } else if (guess < target) {
        alert('Your color is sooner in the alphabet than mine!');
    } else {
        correct = true;
    }
    return correct; //returning correct to pass to the runGame() function
}

//function for the 'I don't want to play' button.
function noFun() {
    //disable the I don't want to play button
    document.getElementById("noFunButton").disabled = true;

    // inserting a msg to the user
    //let usrMsg = document.getElementById('nameOfTheGame').insertAdjacentHTML("afterend", "<p>Hit the blue button, pretty please, I'm bored!</p>");
    let usrMsg = document.createElement('P');
    usrMsg.innerText = 'Hit the blue button, pretty please, I\'m bored!';
    document.getElementById('nameOfTheGame').insertAdjacentElement('afterend', usrMsg);
    //console.log(usrMsg);

    // styling the  gameContainerDiv
    let gameContainer = document.getElementById('gameContainerDiv'); //get the div from html set it in a new variable
    gameContainer.style.background = "black url('https://thumbs.gfycat.com/CreativeHardDinosaur-size_restricted.gif') no-repeat center"; //apply gif bg to it
    gameContainer.style.border = 'thick solid black';
    gameContainer.style.marginTop = '30px';
    gameContainer.style.padding = "80px";

    // styling the nofun button with js
    let noFunButton = document.getElementById('noFunButton')
    noFunButton.style.backgroundColor = ('red');
    noFunButton.style.color = ('white');
    noFunButton.style.marginTop = '50px';
    noFunButton.style.padding = '5px';

    // styling the Pretty Please button with js
    let playButton = document.getElementById('gameContainerDiv').getElementsByClassName('betterButton')[0];
    playButton.textContent = 'Pretty please'; //playButton.querySelector('.betterButton').innerText = 'Pretty please!';
    playButton.style.fontSize = ('20px');
    playButton.style.backgroundColor = ('lightblue');
    playButton.style.color = ('white');
    playButton.style.marginTop = '50px';
    playButton.style.padding = '20px 34px';
    //playButton.insertAdjacentHTML("afterend", "<div></div>");
}