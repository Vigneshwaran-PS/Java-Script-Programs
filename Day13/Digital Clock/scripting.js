




let minutes = document.getElementById("min")
let seconds = document.getElementById("sec")
let ampm = document.getElementById("ampm")

function displayTime(){
  let dateTime = new Date()
  let hour = dateTime.getHours()
  if(hour>12){
    hour = hour - 12
    ampm.innerHTML = "Pm"
  }
  document.getElementById("hr").innerHTML = padding(hour)
  minutes.innerHTML = padding(dateTime.getMinutes())
  seconds.innerHTML = padding(dateTime.getSeconds())

}

setInterval(displayTime,500)

function padding(num){
  return num<10 ? "0"+num : num;
}

