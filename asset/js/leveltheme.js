var themeCarousel = document.getElementById('carouselThemeControls');
var levelCarousel = document.getElementById('carouselLevelControls');
var themeCarouselActiveArray = themeCarousel.getElementsByClassName('carousel-item');
var levelCarouselActiveArray = levelCarousel.getElementsByClassName('carousel-item');
var themeCarouselActive;
var levelCarouselActive;

for (var i = 0 ; i < themeCarouselActiveArray.length ; i++) {
  if (themeCarouselActiveArray[i].classList.contains("active")) {
      themeCarouselActive = themeCarouselActiveArray[i];
    }
};

for (var j = 0 ; j < levelCarouselActiveArray.length ; j++) {
  if (levelCarouselActiveArray[j].classList.contains("active")) {
    levelCarouselActive = levelCarouselActiveArray[j];
  }
};


var theme = themeCarouselActive.querySelector('input');
var level = levelCarouselActive.querySelector('input');

var startGame = document.getElementById('startGame');
var url = "file:///home/axel/Game_project/asset/html/jeu.html?"
var themeURL = "theme=";
var levelURL = "level=";

startGame.onclick = function() {
  setTheme();
  setLevel();
  console.log(themeURL+""+levelURL);
  // window.location.assign(url+themeURL+"&"+levelURL);
  };

function setTheme() {
  var id = theme.id;
  themeURL += id[id.length-1];
}

function setLevel() {
  var id = level.id;
  levelURL += id[id.length-1];
}
