



const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
let button = document.getElementById("bt")


button.addEventListener("click",function(){
  let hexColor = "#"

  for(let i=1;i<=6;i++){
    hexColor = hexColor + randHexVal()
  }

  wrap.style.backgroundColor = hexColor
  wrap.style.transition = 'background-color 2s';
  colortext.innerHTML = hexColor
})


function randHexVal(){
  let randomIndex = Math.floor(Math.random()*16)
  return hex[randomIndex]
}