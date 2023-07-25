var frames = 148 ;
var fps = 30 ; 
var video = document.getElementById('video')
window.addEventListener('scroll', function(){
    var time = (window.scrollY / 1000) * frames / fps;
    video.currentTime = time
})
window.addEventListener ('load' , function(){
    video.pause()
    video.currentTime = 0 
});