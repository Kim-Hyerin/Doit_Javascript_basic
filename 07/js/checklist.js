var itemList = []; // 빈 배열 선언

var addBtn = document.querySelector("#add"); // #add 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList) // addBtn 클릭시 addList 함수 실행

/* 준비물을 입력했는지 텍스트 필드 값 검사, 값이 있으면 배열에 추가 */
function addList() {
    var item = document.querySelector("#item").value; // 텍스트 필드 내용 가져옴
    if (item != null){
        itemList.push(item); // itemList 배열 끝에 item 변숫값 추가
        document.querySelector("#item").value = ""; // #item 배열 추가한 텍스트필드 요소는 지우기
        document.querySelector("#item").focus(); // 커서 활성화, 텍스트 필드에 focus() 함수 적용
    }
    showList(); // 항목 추가시 목록 표시하는 함수 실행
}

/* 준비물 목록 표시 */
function showList() {
    var list = "<ul>"; // 목록 시작 <ul> 태그 저장
    for (var i=0; i<itemList.length; i++){ // 배열 요소마다 반복
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; // 각 요소를 <li>~</li>로 묶음
    }
    list += "</ul>"; // 목록 끝 </ul> 태그 저장
    document.querySelector("#itemList").innerHTML = list; // list 변숫값 표시

    var remove = document.querySelectorAll(".close"); // X 버튼을 변수로 저장, 배열 형태
    for (var i=0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList); // X 클릭시 removeList 실행
    }
}

function removeList() {
    var id = this.getAttribute("id"); // this(누른 X버튼)의 id값 가져와 id변수에 저장
    itemList.splice(id, 1); // itemList(배열).splice(인덱스, 삭제 갯수)
    showList(); // 변경된 itemList 배열 표시
}