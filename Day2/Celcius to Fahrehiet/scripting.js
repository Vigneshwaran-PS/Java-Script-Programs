






function convert(){
   let celciusVal = Number(document.getElementById("input").value)

  let fahrenheitVal = celciusVal * 9./5 +32

  let res = document.getElementById("result")
  res.innerHTML = fahrenheitVal
}