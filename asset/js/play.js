var parameters = location.search.substring(1).split("&");
var theme = parameters[0].split("=");
theme = theme[1];
var level = parameters[1].split("=");
level = level[1];

var transportLevel1 = ['vélo;Transport à 2 roues où il faut pédaler',
  'trottinette;Transport à deux roues où il faut pousser avec le pied',
  'moto;Transport à deux roues à moteur',
  'voiture;Transport à 4 roues à moteur',
  'bus;Transport en commun à 4 roues',
  'avion;Transport volant',
  'bateau;Transport marin',
  'train;Transport ferrovier',
  'fusée;Transport dans l\'espace',
  'cheval;Transport animalier à 4 pattes'];
var transportLevel2 = ['péniche;Transport de cargaison fluvial',
  'tgv;Train grande vitesse',
  'ascenseur;Transporte d\'un étage à l\'autre',
  'charrette;Ancien moyen de transport à 2 roues constitué d\'un plateau',
  'dirigeable;Aéronef léger',
  'limousine;Très longue voiture',
  'sous-marin;Transport allant sous l\'eau',
  'roller;Transport à roulettes montées sur chaussure',
  'ski;Transport sur neige',
  'pédalo;Transport naval se propulsant avec les pieds'];
var transportLevel3 = ['yacht;bateau de plaisance',
  'trirème;bateau grec à 3 rangs de rames',
  'funiculaire;Remontée mécanique sur rail',
  'diligence;Voiture à cheval pour transport de voyageur',
  'catamaran;Transport naval possédant 2 coques et une voile',
  'luge;Transport de glisse sur neige',
  'téléphérique;Remontée mécanique par cable aérien',
  'skateboard;Une planche et 4 roues',
  'hydravion;Avion capable de déjauger',
  'camionnette;Petit camion'];
var animalsLevel1 = ['girafe;Long cou',
  'chien;Ouaf',
  'loup;C\'est pour mieux te manger mon enfant',
  'poule;Cot cot',
  'araignée;Moche avec 8 yeux',
  'chenille;Se transforme en jolie papillon',
  'autruche;Faire l\'...',
  'cochon;Gruik gruik',
  'dauphin;Flipper',
  'orque;Sauvez Willy !'];

var indication = document.getElementById('indication');
var points = document.getElementById('points');
var timer = document.getElementById('timer');
var remainingWords = document.getElementById('remainingWords');
var letters = document.getElementById('letters');
var response = document.getElementById('response');
var playingTab = new Array;

response.focus();

switch (theme) {
  case 'transport':
    switch (level) {
      case '1':
        playingTab = transportLevel1;
        break;
      case '2':
        playingTab = transportLevel2;
        break;
      case '3':
        playingTab = transportLevel3;
        break;
    }
    break;
  case 'animals':
    switch (level) {
      case '1':
        playingTab = animalsLevel1;
        break;
    }
    break;
}

var indice = 0;
var word = "";
var pts = 0;

display(indice);

refreshTimer = setInterval(function(){
  timer.innerHTML--;
},1000);

timeout = setTimeout(function () {
  clearInterval(refreshTimer);
  display(-2);
}, 60150);



response.onkeyup = function() {
  var tmp = response.value;
  if (word == tmp.toLowerCase()){
    indice++;
    pts += 100;
    if (indice < playingTab.length) {
      display(indice);
    }
    else {
      display(-1);
    }
  }
}

function display(i) {
  if (i == -2) {
    indication.innerHTML = "";
    remainingWords.innerHTML = "";
    response.disabled = true;
    response.value = "C\'EST PERDU";
    clearInterval(refreshTimer);
    letters.innerHTML = "";
    points.innerHTML = "";
  }
  else if (i == -1) {
    indication.innerHTML = "";
    remainingWords.innerHTML = "";
    response.disabled = true;
    response.value = "C\'EST GAGNE";
    clearTimeout(timeout);
    clearInterval(refreshTimer);
    letters.innerHTML = "";
    points.innerHTML = "";
  }
  else {
    var tmp = playingTab[i].split(";");
    word = tmp[0];
    indication.innerHTML = tmp[1];
    remainingWords.innerHTML = (10-i)+" mots restants";
    response.value = null;
    var tmp2 = "";
    for (var j = 0 ; j < word.length ; j++) {
      tmp2 = tmp2+"_ ";
    }
    letters.innerHTML = tmp2;
    points.innerHTML = pts+" points";
    console.log("word : "+word);
  }
}
