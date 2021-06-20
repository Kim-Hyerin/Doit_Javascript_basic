function newRegister(){
    var userName = document.querySelector("#userName");
    var nameList = document.querySelector("#nameList");
    var newP = document.createElement("p"); //p 요소 노드 생성
    var newText = document.createTextNode(userName.value); // 사용자 이름 가져와 텍스트 노드 생성
    
    newP.appendChild(newText); // p 요소 노드에 텍스트 자식 노드 연결
    //nameList.appendChild(newP); // nameList 노드에 p 자식 노드 연결 (이름을 아래에 추가)
    nameList.insertBefore(newP, nameList.childNodes[0]); // newP를 명단 맨 위에 표시 (이름을 위에 추가)
    userName.value = ""; //다음 입력을 위해 텍스트 필드 비우기

    var delBtn = document.createElement("span"); // span 요소 노드 생성
    var delText = document.createTextNode("X"); // X 텍스트 노드 생성
    delBtn.setAttribute("class", "del"); // 속성 추가
    delBtn.appendChild(delText); // 자식 노드 연결
    newP.appendChild(delBtn); // 자식 노드 연결

    var removeBtn = document.querySelectorAll(".del");
    for(var i=0; i<removeBtn.length; i++){
        removeBtn[i].addEventListener("click", function(){
            if(this.parentNode.parentNode) //부모의 부모노드가 있다면
                this.parentNode.parentNode.removeChild(this.parentNode) //부모의 부모노드에 접근하여 부모노드 삭제
        });
    }
}