console.log("page loaded...");

var x= document.querySelector("#my-video")

function playVideo(element) {
    x.play(element);
    document.querySelector("#my-video").muted = true;   
}

function pauseVideo(element){
    x.pause(element);
}