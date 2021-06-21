var check = document.querySelector("#shippingInfo"); //체크 상자

check.addEventListener("click", function(){ 
    if(check.checked == true){ //체크 시 주문 정보를 배송 정보에 복사
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;
    } else { //체크 해제시 복사 된 배송 정보 비우기
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});
