var rule1 = document.getElementById('rule1');
var rule2 = document.getElementById('rule2');
var rule3 = document.getElementById('rule3');

var levelLeft = document.getElementById('levelLeft');
var levelRight = document.getElementById('levelRight');

var level;

levelLeft.onclick = function() {
  timeout = setTimeout(function () {
    var id = recupID();
    displayrule(id);
  }, 750);
}

levelRight.onclick = function() {
  timeout = setTimeout(function () {
    var id = recupID();
    displayrule(id);
  }, 750);
}

function displayrule(id) {
  switch (id) {
    case '1' :
      rule1.innerHTML = "60";
      rule2.innerHTML = "150";
      rule3.innerHTML = "200";
      break;
    case '2' :
      rule1.innerHTML = "10";
      rule2.innerHTML = "12";
      rule3.innerHTML = "15";
      break;
    case '3' :
      rule1.innerHTML = "20";
      rule2.innerHTML = "30";
      rule3.innerHTML = "50";
      break;
  }
}

function recupID() {
  var levelCarousel = document.getElementById('carouselLevelControls');
  var levelCarouselActiveArray = levelCarousel.getElementsByClassName('carousel-item');
  var levelCarouselActive;
  for (var j = 0 ; j < levelCarouselActiveArray.length ; j++) {
    if (levelCarouselActiveArray[j].classList.contains("active")) {
      levelCarouselActive = levelCarouselActiveArray[j];
    }
  };
  level = levelCarouselActive.querySelector('input');
  return(level.id[level.id.length-1]);
}
