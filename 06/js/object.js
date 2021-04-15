// 리터럴 표기법으로 장난감 정보 객체 만들기
var toyRobot = { // toyRobot 객체를 선언한 후 속성과 함수 정의
    productID: "123-12",
    name: "Robot",
    price: "25,000",
    madeIn: "Korea",
    quantity: 10,
    showStock: function() { // showStock 함수 정의
        document.querySelector("#display").innerHTML = this.name + " 제품은 " + this.quantity + "개 남아있습니다.";
    },
    showPrice: function() { // showPrice 함수 정의
        //document.querySelector("#display").innerHTML = this.name + " 제품의 가격은 " + this.price + "원 입니다.";
        alert(this.name + " 제품의 가격은 " + this.price + "원 입니다.");
    }
};

toyRobot.showStock(); // toyRobot 객체의 showStock() 함수 실행
toyRobot.showPrice();