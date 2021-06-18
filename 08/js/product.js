var bigPic = document.querySelector("#cup");  
var smallPics = document.querySelectorAll(".small");  
var isOpen = false; //view가 화면에 표시된 상태인지 감춰진 상태인지, 초깃값은 감춰져 있으므로 false
var view = document.querySelector('#view');

for(i=0; i<smallPics.length; i++) {
	smallPics[i].addEventListener("click", function() {
		newPic = this.src;
		bigPic.setAttribute("src", newPic);
	});
}

//상세 설명 보기/닫기
view.addEventListener("click", function(){
	if(isOpen == false){ //감춰진 상태면 실행
		document.querySelector("#detail").style.display = "block";
		view.innerText = "상세 설명 닫기";
		isOpen = true;
	} else { // 표시된 상태면 실행
		document.querySelector("#detail").style.display = "none";
		view.innerText = "상세 설명 보기";
		isOpen = false;
	}
});
