//Q1. 텍스트 단락을 누르면 글자 크기를 20px로, 글자색을 blue로 바꾸고 배경색은 #ccc로 지정하는 소스를 작성하세요.

var myText = document.querySelector("#myText");

myText.addEventListener("click", function(){
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";
})