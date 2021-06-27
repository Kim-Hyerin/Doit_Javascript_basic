//Q1. 웹 브라우저에서 문서를 불러오면 자동으로 current.html(현재시각은?) 문서를 팝업 창에 표시하는 소스를 작성하세요. (너비 300px, 높이 50px)
window.onload = openPopup;

function openPopup(){
    var newWin = window.open("current.html", "", "width=300, height=50");
    if(newWin == null){
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침해 주세요.");
    }
}