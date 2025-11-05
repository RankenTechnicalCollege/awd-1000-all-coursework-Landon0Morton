document.getElementById('btn').addEventListener('click', function numbersong() {
  
  let Num = document.getElementById('age').value;

  if (Num < 1 || Num > 200){
    document.getElementById('agetext').innerHTML = "Age out of range...";
  }else if (Num >= 21) {
    document.getElementById('agetext').innerHTML = "Welcome to the Venue."; 
  } else if (Num < 21) {
    document.getElementById('agetext').innerHTML = "Your not old enough!";
  } else {
    document.getElementById('agetext').innerHTML = "Please enter your age.";
  }
})