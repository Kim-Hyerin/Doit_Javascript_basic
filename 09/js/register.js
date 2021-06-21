//입력값 검증 프로그램

//아이디 글자 수 검증 (영문, 숫자만 사용됐는지 확인 => 정규 표현식 사용)
var userId = document.querySelector("#user-id"); //ID 필드

userId.onchange = checkId; // 내용이 바뀔 때 함수 실행

function checkId(){
    if(userId.value.length < 4 || userId.value.length > 15){ //userId 내용의 길이가 4 미만 or 15 초과일 경우
        alert("4~15자리의 영문과 숫자를 사용하세요."); //오류 메시지 출력
        userId.select(); //select() 포커싱, 기존 값 선택
    }
}

//비밀번호 검증
var userPw1 = document.querySelector("#user-pw1"); //PW 필드
var userPw2 = document.querySelector("#user-pw2"); //PW 확인 필드

userPw1.onchange = checkPw(); // 내용이 바뀔 때 함수 실행

function checkPw(){
    if(userPw1.value.length < 8){ //8자리 미만일 경우
        alert("비밀번호는 8자리 이상이어야 합니다.");
        userPw1.value = ""; //필드 비우기
        userPw1.focus(); //focus() 포커싱, 기존 값 지움
    }
}

//비밀번호 확인
userPw2.onchange = comparePw;

function comparePw(){
    if(userPw1.value != userPw2){ //Pw1과 Pw2가 일치하지 않을 경우
        alert("비밀번호가 다릅니다. 다시 입력하세요.");
        userPw2.value = "";
        userPw2.focus();
    }
}