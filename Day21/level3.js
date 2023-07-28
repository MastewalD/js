let year=document.getElementById("year")
let done=document.getElementById("green")
console.log(done)
done.style.backgroundColor="green"
let ongoing=document.getElementById("yellow")
ongoing.style.backgroundColor="yellow"
let comming=document.getElementById("red")
comming.style.backgroundColor="red"
let comming4=document.getElementById("red4")
comming4.style.backgroundColor="red"
let comming3=document.getElementById("red3")
comming3.style.backgroundColor="red"
let comming2=document.getElementById("red2")
comming2.style.backgroundColor="red"
let comming1=document.getElementById("red1")

comming1.style.backgroundColor="red"

const now = new Date();
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'
};
const date = now.toLocaleDateString('en-US', options);
const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit',second:"2-digit"});

let whole=`${date}, ${time}`


let currentDate=document.getElementById("date")

currentDate.innerHTML=whole

console.log(year)
function changeColor(){
    let color=["red", "green", "blue", "yellow", "purple", "orange"];
    let randomColor=color[Math.floor(Math.random()*color.length)]
    let randomColor1=color[Math.floor(Math.random()*color.length)]
    year.style.color=randomColor
    currentDate.style.backgroundColor=randomColor1
}
setInterval(changeColor,1000)
