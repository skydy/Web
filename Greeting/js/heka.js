window.onload=function(){
    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
    },false);
    music.onclick = function(){
        if(audio.paused){
            audio.play();
            this.style.animationPlayState = "running";
        }else{
            audio.pause();
            this.style.animationPlayState = "paused";
        }
    }
}