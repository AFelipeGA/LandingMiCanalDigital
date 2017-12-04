var video_count =1;
var videoPlayer1 = document.getElementById("ss1");
var videoPlayer2 = document.getElementById("ss2");  
var videoPlayer3 = document.getElementById("ss3");  
var video=document.getElementById("myVideo");
function run(){
    console.log("asd");
    console.log(video_count)
    video_count++;
    if (video_count == 4) video_count = 1;
    videoPlayer1.setAttribute("src","assets/videos/"+video_count+".mp4");
    videoPlayer2.setAttribute("src","assets/videos/"+video_count+".webm");  
    videoPlayer3.setAttribute("src","assets/videos/"+video_count+".ogv");      
    video.load(); 
    video.play();
}

function goFullscreen(id) {
    var element = document.getElementById(id);       
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }  
    else if (element.msRequestFullScreen) {
        element.msRequestFullScreen();
    }
    else if (element.requestFullScreen) {
        element.requestFullScreen();
    } 
  }

document.getElementById('fullscreen-button-icon').addEventListener('click', function(){
    goFullscreen('myVideo');
});