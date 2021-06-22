var selectMenu = document.testForm.major;  //선택 목록 가져와 selectMenu에 저장
function displaySelect() {
	var selectedText = selectMenu.options[selectMenu.selectedIndex].innerText; //선택한 항목의 인덱스 찾고 innerText로 표시
	alert("[" + selectedText + "]를 선택했습니다.");
}
