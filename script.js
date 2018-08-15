
var gifs = [
'url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)',
'url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)',
'url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)',
'url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)',
'url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)',
'url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)',
'url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)',
'url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)',
'url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)',
'url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)', ]
var colors = ["rgb(43,43,43)"]
var resultBox = document.getElementById('result')
var titleBox = document.getElementById('title')
var gifPanel = document.getElementById('gif-panel')
var mainImage = document.getElementById('main-image')
var youImage = document.getElementById('you-image')
var spotifyImage = document.getElementById('spotify-image')
var yrImage = document.getElementById('yr-image')
var youScore = document.getElementById('you-score')
var spotifyScore = document.getElementById('spotify-score')
var yrScore = document.getElementById('yr-score')
var resultButton = document.getElementById('result-button')
var slider = document.getElementById('range')

resultBox.hidden = true;
resultButton.hidden = true

function testClickFunction() {
  alert('clickedddd')
}


var userRating;
function sliderChange(){
  userRating = slider.value;
  mainImage.style.backgroundImage = gifs[userRating-1];
  resultButton.hidden = false;
}

//var userRating;
//var range = "";
function gifFunction(rate) {
 userRating = rate;
 mainImage.style.backgroundImage = gifs[userRating - 1];

  gifPanel.style.background = colors[0]
  if (lastClicked !== ""){
    var lastClickedEle = document.querySelector(lastClicked)
    lastClickedEle.classList.remove("active")
  }
  lastClicked = ".option-" + userRating
  var clicked = document.querySelector(lastClicked)
  clicked.classList.add("active")
}


function onClick() {
  youScore.innerHTML = userRating;
  gifPanel.hidden = true;
  resultBox.hidden = false;
  youImage.style.backgroundImage = gifs[userRating - 1];
}
