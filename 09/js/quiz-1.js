//Q1. 추가 주문 항목에서 체크 상자를 누르면 피자 값에 체크한 항목의 금액만큼 더해서 '합계' 항목에 표시하고,
//체크 상자의 체크를 해제하면 합계에서 그 금액만큼 빼서 표시하는 소스를 작성하세요.
var price = 24000;
var total = document.querySelector("#total");
var side = document.querySelectorAll(".checkbx");

total.value = price + "원";

for(var i=0; i<side.length; i++){
    side[i].onclick = function(){
        if(this.checked == true){
            price += parseInt(this.value);
            total.value = price + "원";
        }else {
            price -= parseInt(this.value);
            total.value = price + "원";
        }
    }
}
