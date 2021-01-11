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

login.click = function() {
  if (password == pwdToto || password == pwdJonas) {
    var tmpToto = usernameToto.split("|");
    var tmpJonas = usernameJonas.split("|");
    if (username == tmpToto[0] || username == tmpToto[0] || username == tmpJonas[0] || username == tmpJonas[1]) {
      login();
    }
    else {
      error.innerHTML = "Identifiant incorrect"
    }
  }
  else {
    error.innerHTML = "Mot de passe incorrect"
  }
}

function login() {
  if (username == "toto") {
    admin.style.display = block;
  }
  welcomeNickname.style.display = block;
  welcomeNickname.innerHTML = username;
  logout.style.display = block;
  log_in.style.display = none;
}

logout.click = function() {
  welcomeNickname.style.display = none;
  welcomeNickname.innerHTML = null;
  logout.style.display = none;
  log_in.style.display = block;

}
