let one=document.querySelector("p")
console.log(one)
let first=document.querySelector("#first")
let second=document.querySelector("#second")
let third=document.querySelector("#third")
let fourth=document.querySelector("#fourth")
console.log(first,second,third,fourth)
let all=document.querySelectorAll("p")
console.log(all)
all.innerHTML=""
for (i=0;i<=all.length;i++){
    console.log(all[i])
}


all[0].innerHTML=""

first.id="first-id"
second.id="sconde-id"
