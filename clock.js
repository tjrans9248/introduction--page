const clockTarget = document.getElementById("clock"); // html에 있는 clock 태그를 가져왔다.

function getTime(){
    const date = new Date(); // new Date() 함수를 통해 실시간 시간을 알수 있다.
    const hours = date.getHours();
    // date 라는 변수를 통해 각각 시간, 분, 초의 실시간 값을 받을 수 있다.
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    // 그 후 innerHTML을 통해 실제 사용자 화면에 출력가능하다.
    



}

function init(){
    setInterval(getTime, 100);
}

init();