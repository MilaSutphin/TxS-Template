// List of gifs from document

/*
1 'https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif',
2 'https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif',
3 'https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif',
4 'https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif',
5 'https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif',
6 'https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif',
7 'https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
8 'https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif',
9 'https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif',
10 'https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif',

*/

// those are variables selecting main elements on the page

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
// this is how you replace the image from the background
//mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
resultButton.hidden = true

// this is how you create a function
function testClickFunction(){
  alert('clickedddd')
}

function buttons(){
  resultButton.hidden = false
}

// Activity today will be

// 1. Create a variable to store the user selected Rating  userRating
var userRating;
// 2. Create 10 different functions to update the userRating score
function gifFunction1(){
  userRating = 1;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)";
}
function gifFunction2(){
  userRating = 2;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)";
}
function gifFunction3(){
  userRating = 3;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)";
}
function gifFunction4(){
  userRating = 4;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)";
}
function gifFunction5(){
  userRating = 5;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)";
}
function gifFunction6(){
  userRating = 6;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)";
}
function gifFunction7(){
  userRating = 7;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)";
}
function gifFunction8(){
  userRating = 8;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)";
}
function gifFunction9(){
  userRating = 9;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)";
}
function gifFunction10(){
  userRating = 10;
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)";
}
// 3. Add the functions to the correpondent HTML elements, using the onclick="functionName()" attribute
// 4. Create a function to process the click on Compare button


function onClick(){
  youScore.innerHTML = userRating;
  gifPanel.hidden = true;
  resultBox.hidden = false;
  if(userRating === 1){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)";
  }
  if(userRating === 2){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)";
  }
  if(userRating === 3){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)";
  }
  if(userRating === 4){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)";
  }
  if(userRating === 5){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)";
  }
  if(userRating === 6){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)";
  }
  if(userRating === 7){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)";
  }
  if(userRating === 8){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)";
  }
  if(userRating === 9){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)";
  }
  if(userRating === 10){
    youImage.style.backgroundImage = "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)";
  }
}



// 5. The function should, hide the element voteBox and show resultBox
// 5.1 Show User score replacing youScore.innerHTML = content
// 5.2. Change youImage with appropriated Gif image
