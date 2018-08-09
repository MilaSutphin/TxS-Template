// function (parameter)
var myName = 'Mila';
var myFullName = "Camila Simone Sutphin";
var myAge = 16;
//document.getElementById(ID)
// select element by its id

//var resultBox = document.getElementById('result')
//resultBox.innerHTML = name


var voteBox = document.getElementById('vote-box')
//voteBox.innerHTML = '<h1> no more vote box </h1>'

//var resultButton = document.getElementbyId('result-button')
//var gifPanel = document.getElementById('gif-panel')

voteBox.addEventListener('mouseover', voteBoxFunction);
function voteBoxFunction(){
  voteBox.innerHTML = '<img src="images/1f62d.svg">';
}

//step 1. select title getElementById using document.getElementById(TITLEID)
//step 2. add mouseover event, using addEventListener('mouseover', FUNCTIONNAME)
//step 3. create a function changeTitle()
//step 4. change title box innerHTML content

var title = document.getElementById('title')
title.addEventListener('mouseover', titleFunction);
function titleFunction(){
  title.innerHTML = "<h1> Not Gods Plan By Drake </h1>"
}

// 1. hide resultBox
// 2. add click event to resultButton
// 3. create a function to processClick
// 4. processClick function show resultBox and hide gifPanel (resultBox.hidden = true/ resultBox.hidden = false )

var resultBox = document.getElementById('result')
resultBox.hidden = true
var resultButton = document.getElementById('result-button')
resultButton.addEventListener('click', resultButtonFunction);
function resultButtonFunction (){
  var gifPanel = document.getElementById('gif-panel')
  gifPanel.hidden = true;
  resultBox.hidden = false;
}
