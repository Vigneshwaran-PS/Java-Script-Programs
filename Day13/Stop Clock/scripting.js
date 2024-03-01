






let button1 = document.getElementById("bt1") 
button1.addEventListener('click',start)
let button2 = document.getElementById("bt2") 
button2.addEventListener('click',stop)
let button3 = document.getElementById("bt3") 
button3.addEventListener('click',reset)


let millisecond = document.getElementById("ms")
let seconds = document.getElementById("sec")

let ms = 0;
let sec = 0
let timer = 0

function start(){
    timer = setInterval(run,0)
}


function run(){
  millisecond.innerHTML = ms++
  if(ms>=100){
    seconds.innerHTML = ++sec
    ms = 0
  }
}


function stop(){
  clearInterval(timer)
}


function reset(){
  clearInterval(timer)
  ms = 0
  sec = 0
  millisecond.innerHTML = 0
  seconds.innerHTML = 0
}
