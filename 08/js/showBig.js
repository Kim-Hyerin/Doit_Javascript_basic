var bigPic = document.querySelector('#cup'); //큰 이미지 요소 접근
var smallPics = document.querySelectorAll('.small'); //작은 이미지 요소 접근(NodeList)

for(var i=0; i<smallPics.length; i++){ //노드 리스트의 각 요소에 접근
    smallPics[i].onclick = showBig; //요소 클릭 시 showBig() 함수 실행
}

function showBig(){
    var newPic = this.src; //click 이벤트가 발생한 대상의 src 속성 값 가져옴
    bigPic.setAttribute("src", newPic); //큰 이미지의 src 속성에 newPic 값 할당
}

/*
setAttribute() 함수 대신 속성 사용하기

for(i=0; i<smallPics.length; i++){
    smallPics[i].onclick = function(event){
        bigPic.src = this.src;
    }
}
*/