/* Freedom For Palestine For Ever */
var myWindow = document.getElementById('container');
myWindow.style.width = window.innerWidth + "px";
myWindow.style.height = window.innerHeight + "px";
divx = window.innerWidth / 2;
divy = window.innerHeight / 2;
window.onresize = function() {
    myWindow.style.width = window.innerWidth + "px";
    myWindow.style.height = window.innerHeight + "px";
    divx = window.innerWidth / 2;
    divy = window.innerHeight / 2;
    div = document.getElementsByClassName('palestine')[0];
    div.style.left = divx + "px";
    div.style.top = divy + "px";
}

window.onmousemove = function(event) {
    // Check if the screen width is greater than 768 pixels (adjust as needed)
    if (window.innerWidth > 768) {
        var x = event.clientX / 20,
            y = event.clientY / 20,
            div = document.getElementsByClassName('palestine')[0],
            logo = document.getElementsByClassName('logo')[0];
        div.style.left = divx + -x + "px";
        div.style.top = divy + -y + "px";
    }
}
/* Freedom For Palestine For Ever */


function toggleAudio() {
    var audioElement = document.getElementById('player')
    var soundOn = document.getElementById('play')
    var soundOff = document.getElementById('pause')
    if (audioElement.paused) {
      audioElement.play();
      $(soundOn).show();
      $(soundOff).hide();
    } else {
      audioElement.pause();
      $(soundOn).hide();
      $(soundOff).show();
    }l
  } 