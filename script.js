//use while loop for conditional execution
//use parseInt() to convert the user input from a string to a number
//prompt users input

function guessit() {
    const number = 7
  let guess =   parseInt(document.getElementById("guess").value);
  
    while (guess !== number) {
      if (guess > number) {
       guess (alert("Too high, go lower!"));
      } else {
       guess (alert("Too low, go higher!"));
      }
    }
    (alert('You are correct! The number is 7!!'));
  }