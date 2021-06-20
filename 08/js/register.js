function newRegister() {
    var newP = document.createElement("p"); //새 요소 만들기
    var userName = document.querySelector("#userName"); //텍스트 필드 내용 가져오기
    var newText = document.createTextNode(userName.value); //새 텍스트 노드 만들기
    newP.appendChild(newText); //newText 노드를 newP 노드의 자식 노드로 연결

    var delBttn = document.createElement("span"); //새 span 요소 만들기
    var delText = document.createTextNode("X"); //새 텍스트 노드 만들기
    delBttn.setAttribute("class", "del"); //버튼에 class = "del" 속성 설정
    delBttn.appendChild(delText); //텍스트 노드를 버튼 요소의 자식 요소로 추가
    newP.appendChild(delBttn); //del 버튼을 p 요소의 자식 요소로 추가
    
    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP, nameList.childNodes[0]); //p 요소를 #nameList 맨 앞에 추가하기 (맨 위에 이름 추가)
    //nameList.appendChild(newP); //newP 노드를 nameList 노드의 자식 노드로 연결 (맨 아래에 이름 추가)
    userName.value = ""; //다음 이름 입력할 수 있도록 텍스트 필드 비우기

    var removeBttns = document.querySelectorAll(".del");
    for(var i=0; i<removeBttns.length; i++){
        removeBttns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) // span->p->nameList
                this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}