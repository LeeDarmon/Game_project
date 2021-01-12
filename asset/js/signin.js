var password = document.getElementById('password');
var verifPassword = document.getElementById('verifPassword');
var nickname = document.getElementById('nickname');
var signin = document.getElementById('signin');
var error = document.getElementById('signinError');
var email = document.getElementById('email');

var user = "toto";
var mail = "toto@gmail.com";
var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

signin.onclick = function() {
  console.log(nickname.value);
  console.log(email.value);
  console.log(password.value);
  console.log(verifPassword.value);
  if (password.value != verifPassword.value) {
    error.innerHTML = "Vérification de mot de passe érronée";
  }
  if (nickname.value == user) {
    error.innerHTML = "Ce pseudo est déjà utilisé";
  }
  if (email.value == mail) {
    error.innerHTML = "Cette adresse est déjà utilisée";
  }
  if (!regex.test(email.value)) {
      error.innerHTML = "Adresse email non valide";
  }
  signin();
}

function signin() {
  console.log("Vous êtes bien inscrit !");
}
