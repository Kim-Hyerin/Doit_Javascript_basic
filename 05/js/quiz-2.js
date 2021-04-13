var num1 = parseInt(prompt("비교할 첫 번째 숫자 :")); // parseInt 함수는 괄호 안의 값을 정수형 숫자로 변환합니다.
var num2 = parseInt(prompt("비교할 두 번째 숫자 :"));
bigger(num1, num2); // 함수 실행

function bigger(num1, num2) {
    if (num1 > num2) return alert(`${num1}(이)가 ${num2}보다 큽니다.`);
    else if (num1 === num2) return alert(`${num1}(과)와 ${num2}(은)는 같습니다.`);
    else return alert(`${num2}(이)가 ${num1}보다 큽니다.`);
}