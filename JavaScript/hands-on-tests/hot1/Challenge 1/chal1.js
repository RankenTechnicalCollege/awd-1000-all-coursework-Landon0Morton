let favMovies = [" Croods", " Deadpool", " Deadpool and Wolverine "];

document.getElementById('UFM').addEventListener('click', function movies() {
  
  let ufmInput = document.getElementById('input').value;

  favMovies.push(ufmInput);

  document.getElementById('space').innerHTML = favMovies;
  
});

