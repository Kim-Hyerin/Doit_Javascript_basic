//Q2. [반지름] 텍스트 필드에 원의 반지름 값을 입력한 후 [계산]을 누르면
// 원의 둘레와 원의 넓이를 계산해서 [원둘레] 필드와 [원넓이] 필드에 계산한 값 표시
var radius = document.querySelector("#radius");
var start = document.querySelector("#start");

start.addEventListener("click", function(){
    document.querySelector("#round").value = 2 * Math.PI * Number(radius.value);
    document.querySelector("#area").value = Math.PI * Number(radius.value) * Number(radius.value);
})