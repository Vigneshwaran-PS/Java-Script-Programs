




let button = document.querySelector("button")
button.addEventListener('click',display)

let res = document.createElement("div")
res.id = "result"
document.getElementById("wrapper").append(res)


function display(){
  let inp = String(document.querySelector('input[name= "degree"]:checked').value)  

  let response

  switch(inp){
    case 'pg':
    response = "Your are not eligible for the Interview"
    break
    case 'ug':
    response = "Your are eligible for the Interview"
    break
    case 'hrss':
    response = "Your are not eligible for the Interview"
    break
    case 'dp':
    response = "Your are eligible for the Interview"
    break
  }


  res.innerHTML = response
}


