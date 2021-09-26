const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else {
      return console.log('Error: You have to choose what is in the upper field' + userInput);
    }
  };
  
  const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3); 
  
  
  
    switch (computerChoice) {
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    }
  };
  
  // console.log(getComputerChoice());
  
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'the game is a tied!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'The user won!';
      }
    }
  }
  
  /*
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'paper wins';
    } else {
        if (computerChoice === 'scissors') {
            return 'rock wins';
      }        
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'scissors wins';
    } else {
        if (computerChoice === 'rock') {
            return 'paper wins';
      }      
    }
  }
    
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'rock wins';
    } else {
        if (computerChoice === 'paper') {
            return 'scissors wins';
        }
      }
    }
  };
  */
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
  
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();