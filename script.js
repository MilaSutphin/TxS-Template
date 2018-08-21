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
  'url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)'
]


var songsData = [{
    songTitle: "God's Plan ",
    songURI: "spotify:track:5t9KtCfnu8wQui1G6IqqBR",
    spotifyRating: "8",
    artistName: "Drake",
    userRating: null,
  },
  {
    songTitle: "Pepper",
    songURI: "spotify:track:1ng36571Iyov4HBxUClySn",
    spotifyRating: "6",
    artistName: "Butthole Surfers",
    userRating: null,
  },
  {
    songTitle: "Crown",
    songURI: "spotify:track:0kDHiwkrZutBHfjypFUzc2",
    spotifyRating: "7",
    artistName: "Flatbush Zombies ",
    userRating: null,
  },
  {
    songTitle: "What I Got",
    songURI: "spotify:track:0kFpb2zqfMCwD1upw0kHw3",
    spotifyRating: "6",
    artistName: "Sublime",
    userRating: null,
  },
  {
    songTitle: "Teenage Dirtbag",
    songURI: "spotify:track:3LI4MmibTkXH5cGpCGZgyw",
    spotifyRating: "6",
    artistName: "Wheatus",
    userRating: null,
  },
  {
    songTitle: "Face",
    songURI: "spotify:track:5bknBRjKJZ643DAN2w8Yoy",
    spotifyRating: "9",
    artistName: "Brockhampton",
    userRating: null,
  }
]

var colors = ["rgb(43,43,43)"]
var resultBox = document.getElementById('result')
var titleBox = document.getElementById('title')
var songTitle = document.getElementById('song-title')
var artist = document.getElementById('artist ')
songsData[currentSong].songTitle = titleBox
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
var nextSong = document.getElementById('next-song')
var iframeElement = document.querySelector("#song-iframe");
var currentSong = 0
var finalButton = document.getElementById('final-button')


resultBox.hidden = true;
resultButton.hidden = true;
nextSong.hidden = true;
finalButton.hidden = true;
setAlbumCover(songsData[currentSong].songURI, mainImage);
iframeElement.src = getSpotifySrc(songsData[currentSong].songURI);


function testClickFunction() {
  alert('clickedddd')
}

var userRating;

function sliderChange() {
  userRating = slider.value;
  mainImage.style.backgroundImage = gifs[userRating - 1];
  resultButton.hidden = false;
}

function gifFunction(rate) {
  userRating = rate;
  mainImage.style.backgroundImage = gifs[userRating - 1];

  gifPanel.style.background = colors[0]
  if (lastClicked !== "") {
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
  spotifyScore.innerHTML = songsData[currentSong].spotifyRating
  spotifyImage.style.backgroundImage = gifs[parseInt(songsData[currentSong].spotifyRating)];
  youImage.style.backgroundImage = gifs[userRating - 1];
  nextSong.hidden = false;
  if (currentSong === songsData[5].songURI) {
    nextSong.Hidden = true;
    finalButton.hidden = false;
  }
}

function onClick2() {
  resultBox.hidden = true;
  gifPanel.hidden = false;
  resultButton.hidden = true;
  nextSong.hidden = true;
  currentSong = 1 + currentSong
  setAlbumCover(songsData[currentSong].songURI, mainImage);
  iframeElement.src = getSpotifySrc(songsData[currentSong].songURI);
}


function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}

function onClick3() {
  resultBox.style.backgroundImage = finalPage //create final page
}

async function setAlbumCover(song, element) {
  var aa = await getAlbumCover(song);
  element.style.backgroundImage = `url(${aa})`;
}

async function getAlbumCover(song) {
  //return the Image for a specific song ID
  const songCode = song.split(':')[2];
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://embed.spotify.com/oembed?url=http://open.spotify.com/track/${songCode}`)
    .then(r => r.json());
  return data.thumbnail_url;
}


//access songURI
//  songsData[0].songURI
//  songsData[0].songTitle
//  songsdata[0].artistName

//replace every song with object
//  songsData[INDEX].songURI
//create a selector on your UI to change Song title and song artist name (with querySelector )
//  var songTitle = document.getElementById('song-title')
//  var songArtist = document.getElementById('song-artist')
//  songTitle.innerHTML = songsData[INDEX].songTitle
//  songArtist.innerHTML = songsData[INDEX].artistName
