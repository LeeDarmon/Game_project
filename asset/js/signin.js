var password = document.getElementById('password');
var verifPassword = document.getElementById('verifPassword');
var nickname = document.getElementById('nickname');
var signin = document.getElementById('signin');
var error = document.getElementById('signinError');
var email = document.getElementById('email');
var signinModal = document.getElementById('signinModal');

var user = "toto";
var mail = "toto@gmail.com";
var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

signin.onclick = function() {
  if (password.value != verifPassword.value) {
    error.innerHTML = "Vérification de mot de passe érronée";
  }
  else if (nickname.value == user) {
    error.innerHTML = "Ce pseudo est déjà utilisé";
  }
  else if (email.value == mail) {
    error.innerHTML = "Cette adresse est déjà utilisée";
  }
  else if (!regex.test(email.value)) {
      error.innerHTML = "Adresse email non valide";
  }
  else {
    signing();
  }
}

function signing() {
  signinModal.modal = "hide";
  console.log("Vous êtes bien inscrit !");
}
