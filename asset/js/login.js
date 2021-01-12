var password = document.getElementById('password');
var username = document.getElementById('identifiant');
var login = document.getElementById('login');
var error = document.getElementById('loginError');
var welcomeNickname = document.getElementById('welcomeNickname');
var logout = document.getElementById('logout');
var admin = document.getElementById('admin');
var log_in = document.getElementById('log_in');

var pwdToto = "jesuistoto";
var usernameToto = "toto|toto@gmail.com";

var pwdJonas = "jesuisjonas";
var usernameJonas = "jonas|jonas@gmail.com";

console.log(username.value);
console.log(password.value);


login.click = function() {
  if (password.value == pwdToto || password.value == pwdJonas) {
    var tmpToto = usernameToto.split("|");
    var tmpJonas = usernameJonas.split("|");
    if (username.value == tmpToto[0] || username.value == tmpToto[0] || username.value == tmpJonas[0] || username.value == tmpJonas[1]) {
      login();
    }
    else {
      error.innerHTML = "Identifiant incorrect";
    }
  }
  else {
    error.innerHTML = "Mot de passe incorrect";
  }
}

function login() {
  if (username.value == "toto") {
    admin.style.display = block;
    console.log("display admin");
  }
  welcomeNickname.style.display = block;
  welcomeNickname.innerHTML = username.value;
  logout.style.display = block;
  log_in.style.display = none;
  console.log("On affiche les bonnes choses");
}

logout.click = function() {
  welcomeNickname.style.display = none;
  welcomeNickname.innerHTML = null;
  logout.style.display = none;
  log_in.style.display = block;
  console.log("On retire ce qu'on doit retirer");
}
