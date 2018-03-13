 

 const wordToGuess = "bananas";

 const wordState = [];

 ///const guessesLeft = document.getElementById('g')

 let guessesLeft = 7;

 const prevGuesses = new Array;

 function displayWordState(state){
 	let output = '';

 for(let i = 0; i < state.length; i++){
 	const char = state[i];
 	output = output + char;
 	output = output + " ";
 }

 const wordStateContainer = document.getElementById('word');
 wordStateContainer.innerHTML = output;
  }
 	
 function displayGuessesLeft(num){
 	document.getElementById('guesses-left').innerHTML = num;
  }

 function displayPreviousGuesses(guessesArray){
 	prevGuess = document.getElementById('past-guess')
 	let li = document.createElement("li");
 	let size = prevGuesses.length;
 		li.innerHTML = prevGuesses[size-1]
 	prevGuess.appendChild(li);
 		
  }
  //takes in word to guess, the current state of the word and
  function guess(wordToGuess, wordState, currGuess){
  	for(let i = 0; i < wordToGuess.length; i++){
		if(wordToGuess[i] == currGuess){
			wordState[i] = currGuess;
	   	}  	
  	 }
  	 
  	 displayWordState(wordState);
  	 const won = checkWon(wordState);

	 window.alert('You won!')
		

  }

  function checkWon(wordState){
  	for(let i = 0; i < wordState.lenght; i++){
  		if(wordState[i] == '_'){
  	 	  hasBlanks = true;
  	 	}
   	}
   }

   // return hasBlanks;
 //function setup(){
 	//for(let i = 0; i < wordToGuess.lenght; i++){
  	   //wordState.push('_');	
  
    //displayWordState(wordState);
    //displayGuessLeft(guessesLeft);
    //displayPreviousGuesses(prevGuesses);
      //}
     //}

 function setup(){
 	for(let i = 0; i < wordToGuess.length; i++){
 		wordState.push('_')
 	  }
 	
 	displayGuessesLeft(guessesLeft);
 	displayWordState(wordState);
 	displayPreviousGuesses(prevGuesses);
   }

function setupForm(){
	const form = document.getElementById('player-input');
	const input = document.getElementById('player-guess');

	form.onsubmit = function(event){
		event.preventDefault();
		const currentInput = input.value;
		
		// add guess to previous guesses
		prevGuesses.push(currentInput);
		
		// uddate guesses left
		guessesLeft = guessesLeft - 1;
		displayGuessesLeft(guessesLeft);

		guess(wordToGuess, wordState, currentInput);

		const won = checkWon(wordState);
		if(won){
			window.alert('You won!')
		}

		if(guessesLeft == 0){
			window.alert('You Lost!')
		}

		
		displayPreviousGuesses(prevGuesses);
		displayWordState(wordState);	  }
	}
    
setup();
setupForm();