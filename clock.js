const clockTarget = document.getElementById("clock"); // html에 있는 clock 태그를 가져왔다.

function getTime(){
    const date = new Date(); // new Date() 함수를 통해 실시간 시간을 알수 있다.
    const hours = date.getHours();
    // date 라는 변수를 통해 각각 시간, 분, 초의 실시간 값을 받을 수 있다.
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
    // 그 후 innerHTML을 통해 실제 사용자 화면에 출력가능하다.
    // 출력시, 시간이 두자리 수로 나오지 않고 한자리 수로 나온다( ex> 8: 13) 그래서 0을 추가하기 위해 삼항연산자를 사용했다.
    // ${hours < 10 ? `0${hours}` : hours}
    // hours 이 영보다 작으면 0을 추가해주고 : 그렇지 않으면 그대로 출력, 


}

function init(){ // 실시간으로 시간이 업데이트 된다. 
    setInterval(getTime, 1000);
}

init();