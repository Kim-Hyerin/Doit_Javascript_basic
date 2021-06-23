//폼 요소에서 입력값 검증하기
var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select();
    }
}

pw1.onchange = checkpw1;
function checkpw1(){
    if(pw1.value.length < 8){
        alert("8자리 이상의 비밀번호를 사용하세요.");
        pw1.value = "";
        pw1.focus();
    }
}

pw2.onchange = checkpw2;
function checkpw2(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 다릅니다.");
        pw2.value = "";
        pw2.focus();
    }
}