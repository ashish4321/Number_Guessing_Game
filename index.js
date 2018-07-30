var randomNumber = Math.floor(Math.random() * 100) + 1;
	var guesses = document.querySelector('.guesses');
	var lastResult = document.querySelector('.lastResult');
    var lowOrHi = document.querySelector('.lowOrHi');
    var originalNumber= document.querySelector('.originalNumber');

    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');

    var guessCount = 1;
    var resetButton;
    document.getElementById("demo").innerHTML = 7;
    function checkGuess() 
    {
      var userGuess = Number(guessField.value);
      var chancesRem=(7-guessCount);
      document.getElementById("demo").innerHTML = chancesRem;
      if (guessCount === 1) 
      {
         guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += userGuess + ' ';
 
      if (userGuess === randomNumber) 
      {
         lastResult.textContent = 'Awesome! You are great.';
         lowOrHi.textContent = '';
         setGameOver();
      } 
      else if (guessCount === 7)
      {
        lastResult.textContent = 'Game over! The original number was:';
        originalNumber.textContent = randomNumber;
        lowOrHi.textContent = '';
        setGameOver();
      } 
      else 
      {
         lastResult.textContent = 'Oops You Missed!';
          if(userGuess < randomNumber) 
          {
            lowOrHi.textContent = 'Try a higher number than this.';
          } 
          else if(userGuess > randomNumber) 
          {
           lowOrHi.textContent = 'Try a smaller number than this.';
          }
       }
 
       guessCount++;
       guessField.value = '';
       guessField.focus();
    }
    guessSubmit.addEventListener('click', checkGuess);
    function setGameOver()
    {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
    function resetGame() 
    {
      document.getElementById("demo").innerHTML = 7;
      guessCount = 1;

      var resetParas = document.querySelectorAll('.resultParas p');
      for (var i = 0 ; i < resetParas.length ; i++)
       {
         resetParas[i].textContent = '';
       }

     resetButton.parentNode.removeChild(resetButton);

     guessField.disabled = false;
     guessSubmit.disabled = false;
     guessField.value = '';
     guessField.focus();

     randomNumber = Math.floor(Math.random() * 100) + 1;
    }
