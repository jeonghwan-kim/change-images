var imgCount = -1;
const imgNum = 3
var timer;
    
function changeImg() {
    imgCount = (imgCount + 1) % imgNum;
    document.getElementsByTagName("img")[0].src = "sea" + imgCount + ".jpeg";            
}     

function trimImageSize() {
    var imageHeight = document.body.clientHeight - 50;
    document.getElementsByTagName("img")[0].style.height = imageHeight;
}

function start() {
    trimImageSize();
    timer = setInterval(function(){changeImg()}, 1000);            
}

function stop() {
    clearInterval(timer);
}

window.onload = function() {
    document.getElementById("changebtn").onclick = function() {start()};
    document.getElementById("stopbtn").onclick = function() {stop()};            
                
    changeImg();
    trimImageSize();
}   

window.onresize = function() {
    trimImageSize();
}
