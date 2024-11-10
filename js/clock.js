const clock = document.querySelector("h1#clock");

/*interval 역할 
'매번'일어나야하는 무언가를 말함.
'매 2초' 마다 함수를 실행하는 것. 
*/
//setInterval은 두 개의 argument를 받는다.
//하나는 내가 실행하고자하는 함수이고, 두번째는 호출되는 함수 간격을 몇 ms로 할지 쓰면된다.
//padStart는 (길이는 2글자로 지정, "0" (두글자가 아닌 것은 앞에 0 붙이기))
function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock(); //바로 시간이 실행되도록 하는 것, 안하면 00:00:00 1초 뒤에 시간이 실행됨.
setInterval(getClock, 1000); //1000ms(1초)
