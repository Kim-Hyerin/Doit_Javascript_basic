window.onload = openPop; //문서를 불러오자마자 실행해야 하므로 onload 이벤트 처리

function openPop(){
    var newWin = window.open("popup.html", "", "width=400, height=400");
    if(newWin == null){ //팝업이 차단되어 있다면 if문 실행
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침해 주세요.");
    }
}