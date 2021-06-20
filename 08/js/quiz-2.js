//Q2. 각 항목 앞에 있는 체크 표시를 누르면 항목 텍스트의 글자 색이 회색(#ccc)으로 바뀌도록 소스를 작성하세요.

var check = document.querySelectorAll(".check");

for(var i=0; i<check.length; i++){
    check[i].addEventListener("click", function(){     
        this.parentNode.style.color = "#ccc";
    });
}