var startGame = document.getElementById('startGame');
var url = "../html/jeu.html?"
var themeURL = "theme=";
var levelURL = "level=";
var theme;
var level;

startGame.onclick = function() {
  selectVariable();
  setTheme();
  setLevel();
  console.log(url+themeURL+"&"+levelURL);
  window.location.assign(url+themeURL+"&"+levelURL);
  };

function selectVariable() {
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
  theme = themeCarouselActive.querySelector('input');
  level = levelCarouselActive.querySelector('input');
}

function setTheme() {
  themeURL += theme.id;
}

function setLevel() {
  var id = level.id;
  levelURL += id[id.length-1];
}
