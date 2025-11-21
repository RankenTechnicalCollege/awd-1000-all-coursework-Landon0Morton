document.getElementById('login').addEventListener('click', checkInfo);

function checkInfo() {

  let emailValue = document.getElementById('email').value;
  let passwordValue = document.getElementById('password').value;

  if (emailValue == "admin@example.com" && passwordValue == "password") {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('login-text').innerText = "Welcome back Admin!";
    document.getElementById('login-text').classList.remove('text-danger');
    document.getElementById('login-text').classList.add('text-success');
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
    })

  } else if (emailValue == "" && passwordValue == "" ) {
    document.getElementById('login-text').innerText = "You seem to have forgotten your username and password.";
    document.getElementById('login-text').classList.add('text-danger');
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
    })

  }else if (passwordValue == "") {
    document.getElementById('login-text').innerText = "Please enter a password.";
    document.getElementById('login-text').classList.add('text-danger');
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
    })

  } else if (emailValue == "") {
    document.getElementById('login-text').innerText = "Please enter an email.";
    document.getElementById('login-text').classList.add('text-danger');
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
    })

  }  else {
    document.getElementById('login-text').innerText = "You've logged in!";
    document.getElementById('login-text').classList.remove('text-danger');
    document.getElementById('login-text').classList.add('text-success');
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
      });
  }
}