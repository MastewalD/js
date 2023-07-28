let whole =document.getElementsByTagName("p")
console.log(whole.length)
for(i=0;i<=whole.length;i++){
    if(i%2===0){
        whole[i].style.backgroundColor="green"
        whole[i].style.color="red"
    }
    else {
        whole[i].style.backgroundColor="blue"
        whole[i].style.color="green"
    }
    
}