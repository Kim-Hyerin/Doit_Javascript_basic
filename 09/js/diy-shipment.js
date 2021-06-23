//주문 정보 내용을 배송 정보로 가져오기
var nameInfo = document.querySelector("#billingName");
var telInfo = document.querySelector("#billingTel");
var addrInfo = document.querySelector("#billingAddr");
var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function(){
    if(check.checked == true){ //체크된다면
        document.querySelector("#shippingName").value = nameInfo.value;
        document.querySelector("#shippingTel").value = telInfo.value;
        document.querySelector("#shippingAddr").value = addrInfo.value;
    }else {
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }
});