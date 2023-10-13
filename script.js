function showAlert(message) {
    return new Promise((resolve, reject) => {
      if (message) {
        alert(message);
        playSound(); // Play sound when alert is displayed
        resolve('Alert displayed successfully.');
      } else {
        reject('Message is required.');
      }
    });
  }
  
  function playSound() {
    const audio = new Audio('mixkit-cartoon-toy-whistle-616.wav'); // Replace with the path to your sound file
    audio.play();
  }
  
  function displayAlert() {
    const message = prompt('Enter a message for the alert:');
    
    showAlert(message)
      .then(successMessage => {
        console.log(successMessage);
      })
      .catch(errorMessage => {
        console.error('Error: ' + errorMessage);
      });
  }
  