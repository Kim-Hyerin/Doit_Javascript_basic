var myVar = 100;
test();
document.write("myVar is " + myVar);

function test() { 			
	myVar = 50; // 전역 변수 (var 사용x)
}