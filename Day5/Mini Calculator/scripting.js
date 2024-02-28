




let button = document.querySelector("button")
button.addEventListener("click",display)

let res = document.createElement("div")
res.id = "result"
document.getElementById("wrapper").append(res)

function display(){
  let inputObj = String(document.getElementById("input").value)
  let operatorIndex = inputObj.search(/[+-/*]/)
  let operator = inputObj[operatorIndex]
  // console.log(operator)
  let num1 = Number(inputObj.slice(0,operatorIndex))
  let num2 = Number(inputObj.slice(operatorIndex+1))
  let ans = 0

  switch(operator){
    case '+' :
      ans = num1 + num2
      break
    case '-' :
      ans = num1 - num2
      break 
    case '*' :
      ans = num1 * num2
      break     
    case '/' :
      ans = num1 / num2
      break  
  }
  document.getElementById("result").innerHTML = ans
  
}