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
    songNumber: "1",
  },
  {
    songTitle: "Pepper",
    songURI: "spotify:track:1ng36571Iyov4HBxUClySn",
    spotifyRating: "6",
    artistName: "Butthole Surfers",
    userRating: null,
    songNumber: "2",
  },
  {
    songTitle: "Crown",
    songURI: "spotify:track:0kDHiwkrZutBHfjypFUzc2",
    spotifyRating: "7",
    artistName: "Flatbush Zombies ",
    userRating: null,
    songNumber: "3",
  },
  {
    songTitle: "What I Got",
    songURI: "spotify:track:0kFpb2zqfMCwD1upw0kHw3",
    spotifyRating: "6",
    artistName: "Sublime",
    userRating: null,
    songNumber: "4",
  },
  {
    songTitle: "Teenage Dirtbag",
    songURI: "spotify:track:3LI4MmibTkXH5cGpCGZgyw",
    spotifyRating: "6",
    artistName: "Wheatus",
    userRating: null,
     songNumber: "5",
  },
  {
    songTitle: "Face",
    songURI: "spotify:track:5bknBRjKJZ643DAN2w8Yoy",
    spotifyRating: "9",
    artistName: "Brockhampton",
    userRating: null,
    songNumber: "6",
  }
]

var colors = ["rgb(43,43,43)"]
var resultBox = document.getElementById('result')
var titleBox = document.getElementById('title')
var songTitle = document.getElementById('song-title')
var artist = document.getElementById('artist')
//songsData[currentSong].songTitle = titleBox
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
var final = document.getElementById('final-button')
var finalPage = document.getElementById('end-page')
var sliderNumber = document.getElementById('slider-number')
var songNumbers = document.getElementById('song-number')
var resultELement = document.getElementById('result-element');



resultBox.hidden = true;
resultButton.hidden = true;
nextSong.hidden = true;
final.hidden = true;
finalPage.hidden = true;
resultELement.hidden = true;
setAlbumCover(songsData[currentSong].songURI, mainImage);
iframeElement.src = getSpotifySrc(songsData[currentSong].songURI);


function testClickFunction() {
  alert('clickedddd')
}

var userRating;

function sliderChange() {
  userRating = slider.value;
  sliderNumber.innerHTML = slider.value;
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
//  songsData[currentSong].spotifyRating = spotifyScore
  gifPanel.hidden = true;
  resultBox.hidden = false;
  spotifyScore.innerHTML = songsData[currentSong].spotifyRating;
  spotifyImage.style.backgroundImage = gifs[parseInt(songsData[currentSong].spotifyRating - 1)];
  youImage.style.backgroundImage = gifs[userRating - 1];
  nextSong.hidden = false;
  songsData[currentSong].userRating = userRating;
}

function onClick2() {
  currentSong = 1 + currentSong;
  resultBox.hidden = true;
  resultButton.hidden = true;
  nextSong.hidden = true;
  if (currentSong > (songsData.length - 1)) {
    nextSong.Hidden = true;
    final.hidden = false;
    onClick3();
  } else {
    gifPanel.hidden = false;
    setAlbumCover(songsData[currentSong].songURI, mainImage);
    iframeElement.src = getSpotifySrc(songsData[currentSong].songURI);
    songTitle.innerHTML = songsData[currentSong].songTitle;
    artist.innerHTML = songsData[currentSong].artistName;
    songNumbers.innerHTML = songsData[currentSong].songNumber;
  }
}


function getSpotifySrc(song) {
  const songCode = song.split(':')[2];
  return `https://open.spotify.com/embed/track/${songCode}`;
}

function onClick3() {
  songTitle.hidden = true;
  gifPanel.hiden = true;
  resultBox.hidden = true;
  resultBox.style.backgroundImage = finalPage;
  finalPage.hidden = false;
  resultELement.Hidden = false;
  score()
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


var myResult;
function score(){
  myResult = (Math.abs(songsData[0].userRating - songsData[0].spotifyRating)
    + Math.abs(songsData[1].userRating - songsData[1].spotifyRating)
    + Math.abs(songsData[2].userRating - songsData[2].spotifyRating)
    + Math.abs(songsData[3].userRating - songsData[3].spotifyRating)
    + Math.abs(songsData[4].userRating - songsData[4].spotifyRating)
    + Math.abs(songsData[5].userRating - songsData[5].spotifyRating)
    + Math.abs(songsData[6].userRating - songsData[6].spotifyRating))
    / songsData.length;

    if (myResult > 0 && myResults <= 3){
      resultELement.innerHTML = "something"
    }

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
