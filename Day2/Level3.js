let sen1='Love is the best thing in this world. Some love found their love and some are still looking for their love.'
let sen2=sen1.split(/\W+/)
console.log(sen2.length)
let count =0
for(i=0;i<=sen2.length;i++){
    if (sen2[i] ==="love"){
        count +=1
    }
}
console.log(count)
let pattern=sen1.match(/love/g)
console.log(pattern.length)
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sen3=sen1.replace("%$@#","")
let sen4=sen3.split()
for (i=0; i<=sen4.length;i++){
let count1=0
if()

}

console.log()
