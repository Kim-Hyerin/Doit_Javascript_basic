function Book (title, author, volume, price) {
    this.title = title; //제목
    this.author = author; //저자
    this.volume = volume; //분량
    this.price = price; //가격
}

// Book 객체로 찍어 낸 인스턴스 html
var html = new Book("웹 표준의 정석", "Ko", "608", "28,000");
var youtube = new Book("유튜브 영상 만들기", "Kim", "368", "16,000");
var python = new Book("점프 투 파이썬", "Park", "352", "18,800");

// 책 제목만 표시하는 booklist 배열 [3개의 book 객체 저장]
var booklist = [html, youtube, python];

// booklist에 있는 객체마다 접근하여 title 속성 값 표시
document.write("<h2>책 제목으로 살펴보기</h2>");
for(var i=0;i<booklist.length;i++){
    document.write("<p>" + booklist[i].title + "</p>");
}