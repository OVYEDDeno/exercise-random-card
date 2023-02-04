let btn=document.querySelector("#button")
let topSuit=document.querySelector(".topSuit")
let bottomSuit=document.querySelector(".bottomSuit")
let value=document.querySelector("#value")
btn.addEventListener("click",function(){
changeCard()
})
function changeCard(){
  let SuitList=["♦", "♥", "♠", "♣"]
let ValueList=["A","2","3","4","5","6","7","8","9","10","J","Q","K",]
let RandomSuit=SuitList[Math.floor(Math.random()*SuitList.length)]
let RandomValue=ValueList[Math.floor(Math.random()*ValueList.length)]
if(RandomSuit=="♦"||RandomSuit=="♥"){
  topSuit.style.color="red"
  bottomSuit.style.color="red"
  value.style.color="red"
}else{
  topSuit.style.color="black"
  bottomSuit.style.color="black"
  value.style.color="black"
}
topSuit.innerHTML=RandomSuit
bottomSuit.innerHTML=RandomSuit
value.innerHTML=RandomValue
}
window.onload=function(){
  changeCard()
}