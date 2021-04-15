var now = new Date(); //오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듦

var firstday = new Date("2019-12-18"); //처음 만난 날의 날짜 정보를 firstDay 객체로 만듦

var toNow = now.getTime(); //오늘 날짜를 밀리초로 바꿈
var toFirst = firstday.getTime(); //처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; //처음 만난 날과 오늘 사이의 차이 (밀리초 값)

var passedDay = Math.ceil(passedTime/(1000 * 60 * 60 * 24)); //(계산한 밀리초 => 날짜), 1일 = 24시간 * 60분 * 60초 * 1000밀리초
//ceil : 소수점 이하를 올림하여 계산 (처음 만난 날->1일)


/* 만난 지 며칠 째? */
document.querySelector("#accent").innerText = `${passedDay}일`;


/* 1일 */
var future = toFirst; //(toFrist = 1 기준)
var someDay = new Date(future); //future 값을 사용해 Date 객체의 인스턴스 생성
var year = someDay.getFullYear(); //'연도' 가져오기
var month = someDay.getMonth()+1; //'월' 가져오기 0~11 표기이므로 1을 더함
var date = someDay.getDate(); //'일' 가져오기
document.querySelector("#date1").innerText = `${year}. ${month}. ${date}`;


/* 100일 */
future = toFirst + 99 * (1000 * 60 * 60 * 24); //처음 만난 날 + 99일
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth()+1;
date = someDay.getDate();
document.querySelector("#date100").innerText = `${year}. ${month}. ${date}`;


/* 200일 */
future = toFirst + 199 * (1000 * 60 * 60 * 24); //처음 만난 날 + 199일
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth()+1;
date = someDay.getDate(); 
document.querySelector("#date200").innerText = `${year}. ${month}. ${date}`;


/* 1주년 */
future = toFirst // 처음 만난 날 기준, 1년 더하기
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth()+1; 
date = someDay.getDate(); 
document.querySelector("#date365").innerText = `${year+1}. ${month}. ${date}`; // 처음 만난 연도 + 1


/* 500일 */
future = toFirst + 499 * (1000 * 60 * 60 * 24); //처음 만난 날 + 499일
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth()+1; 
date = someDay.getDate(); 
document.querySelector("#date500").innerText = `${year}. ${month}. ${date}`;


/* 2주년 */
future = toFirst // 처음 만난 날 기준, 2년 더하기
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth()+1;
date = someDay.getDate();
document.querySelector("#date3652").innerText = `${year+2}. ${month}. ${date}`; // 처음 만난 연도 + 2


/* 1000일 */
future = toFirst + 999 * (1000 * 60 * 60 * 24); //처음 만난 날 + 999일
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth()+1; 
date = someDay.getDate(); 
document.querySelector("#date1000").innerText = `${year}. ${month}. ${date}`;
