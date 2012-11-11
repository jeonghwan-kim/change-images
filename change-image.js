// 전역 변수
var imgCount = -1;
const imgNum = 3
var timer;
var isChange = false;
    
// 이미지를 img element에 로딩
function loadImg() {
    imgCount = (imgCount + 1) % imgNum;
    document.getElementsByTagName("img")[0].src = "sea" + imgCount + ".jpeg";            
}     

// 이미지 크기를 창 크기에 맞춤
function trimImageSize() {
    var imageHeight = document.body.clientHeight - 50;
    document.getElementsByTagName("img")[0].style.height = imageHeight;
}

// 버튼 핸들러
function btnHandler() {
    if (isChange) {
        // stop
        clearInterval(timer);
        document.getElementById("btn").value = "Change Images!";
    } else {
        // start
        timer = setInterval(function(){loadImg()}, 1000);            
        document.getElementById("btn").value = "stop";
    }
    
    isChange = !isChange;
}

// (1) body 로딩시 콜백함수 연결 및 버튼 설정 
// (2) 초기 이미지 로딩 및 크기 조절
window.onload = function() {
    document.getElementById("btn").value = "Change images!";
    document.getElementById("btn").onclick = btnHandler;
    loadImg();
    trimImageSize();
}   

// 윈도우 사이즈 변경시 콜백함수 연결
window.onresize = function() {
    trimImageSize();
}