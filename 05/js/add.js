var num1 = parseInt(prompt("첫 번째 숫자는? ")); // parseInt() 함수는 프롬프트 창에 입력한 숫자를 정수로 바꿔주는 함수
var num2 = parseInt(prompt("두 번째 숫자는? ")); // parseInt() 대신 Number() 사용 가능
addNumber(num1, num2); // 값 2개와 함께 함수 실행

function addNumber(a, b){ // 매개변수 a, b가있는 함수 선언
    var sum = a + b;
    alert("두 수를 더한 값은 " + sum + "입니다.");
}