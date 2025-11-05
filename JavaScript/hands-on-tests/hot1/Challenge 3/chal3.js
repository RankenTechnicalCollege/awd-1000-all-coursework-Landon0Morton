
document.getElementById('btn').addEventListener('click', function numbersong() {
  
  let Num = document.getElementById('num').value;

  if (Num > 3) {
    document.getElementById('secret').innerHTML = "Please enter a number 1-3.";
  } else if (Num == 1) {
    document.getElementById('secret').innerHTML = "One is the loneliest number that you'll ever do.";
  } else if (Num == 2){
    document.getElementById('secret').innerHTML = "Two can be as bad as one. It's the loneliest number since the number one.";
  } else if (Num == 3){
    document.getElementById('secret').innerHTML = "There is no three.";
  } else {
    document.getElementById('secret').innerHTML = "Please enter number.";
  }
})