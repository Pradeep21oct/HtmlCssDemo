document.addEventListener("DOMContentLoaded", function() { init(); }, false);

var mediaPlayer;
var playPauseBtn;
var muteBtn;
var progressBar;

function init(){

        mediaPlayer=document.getElementById("media-video");
    	playBtn = document.getElementById('play-button');
    	pauseBtn = document.getElementById('pause-button');
    	muteBtn = document.getElementById('mute-button');
    	progressBar = document.getElementById('progress-bar');

    mediaPlayer.controls=false;
    document.getElementById("unlikecount").innerHTML=localStorage.unlikeclickcount;
    document.getElementById("likecount").innerHTML=localStorage.likeclickcount;
    mediaPlayer.addEventListener('play',function(){

    },false);
    mediaPlayer.addEventListener('pause',function(){disableButton(pauseBtn);


    },false);
    mediaPlayer.addEventListener('timeupdate', updateProgressBar, false);




    	mediaPlayer.addEventListener('ended', function() { this.pause(); }, false);

}

function togglePlayPause(){
    var btn=document.getElementById("play-pause-button");
    if(mediaPlayer.pause||mediaPlayer.ended){
        changeButtonType(btn, 'pause');
        mediaPlayer.play();
       }

       else{
             changeButtonType(btn, 'play');
              mediaPlayer.pause();
       }
}



function play(){
    var btn=document.getElementById("play");
    if(mediaPlayer.pause||mediaPlayer.ended){
        mediaPlayer.play();
        btn.addCSS('#play')
       }


}



function pause(){
    var btn=document.getElementById("play-pause-button");
              mediaPlayer.pause();

}
function changeButtonType(btn, value) {
   btn.title = value;
   //btn.innerHTML = value;
   //btn.className = value;
}


function disableButton(btn) {
  // btn.title = value;
   //btn.innerHTML = value;
   btn.disabled = true;
}


function  stopPlayer(){
        mediaPlayer.pause();
        mediaPlayer.currentTime=0;

}

function changeVolume(direction){
     if(direction==='+') mediaPlayer.volume+=mediaPlayer.volume===1?0:0.2;
     else mediaPlayer.volume -= (mediaPlayer.volume == 0 ? 0 : 0.2);
      mediaPlayer.volume = parseFloat(mediaPlayer.volume).toFixed(1);

}

function toggleMute(){

 var btn =document.getElementById("mute-button");
 if(mediaPlayer.muted){
    changeButtonType(btn,'mute');
    mediaPlayer.muted=false;
 }
 else{
 changeButtonType(btn,'unmute');
     mediaPlayer.muted=true;
 }

}
function replayMedia() {
   resetPlayer();
   mediaPlayer.play();
}
function updateProgressBar() {
	var percentage = Math.floor((100 / mediaPlayer.duration) * mediaPlayer.currentTime);
	progressBar.value = percentage;
	progressBar.innerHTML = percentage + '% played';
}
function resetPlayer(){
        progressBar.value=0;
        mediaPlayer.currentTime=0;
        changeButtonType(playPauseBtn,'play')

}

function like(){
if(typeof(Storage)!=="undefined")
  {
  if (localStorage.likeclickcount)
    {
    localStorage.likeclickcount=Number(localStorage.likeclickcount)+1;
    }
  else
    {
    localStorage.likeclickcount=1;
    }
  document.getElementById("likecount").innerHTML=localStorage.likeclickcount;
  }


}

function unlike(){
if(typeof(Storage)!=="undefined")
  {
  if (localStorage.unlikeclickcount)
    {
    localStorage.unlikeclickcount=Number(localStorage.unlikeclickcount)+1;
    }
  else
    {
    localStorage.unlikeclickcount=1;
    }
  document.getElementById("unlikecount").innerHTML=localStorage.unlikeclickcount;
  }


}