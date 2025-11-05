document.getElementById('suprise').addEventListener('click', function numberCounter() {
  for (let i = 15; i < 100; i+=15) {
    document.getElementById('numbers').innerHTML += "<br>" + i +  "<br>";

  }
});

