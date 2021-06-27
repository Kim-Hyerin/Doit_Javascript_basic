//Q2. quiz-2.html 문서를 가져와 [새로고침] 버튼을 누르면 현재 문서를 다시 불러오는 소스를 작성하세요.
function changeBgcolor(){
    var r = Math.floor(Math.random() * 256); // 소수점 이하 버림, 난수 발생
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgColor;
}
changeBgcolor();