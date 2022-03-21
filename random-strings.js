//generate random strings

console.log(Math.floor(Math.random() * 27) + 65);


//==============================================================
//coupling the elements of an array in series:
let fruits = ["apple", "mango", "banana", "litche"];

let pairedArray=[]
let i=0;
for (let index = 0; index < fruits.length/2; index++) {
    // console.log([i,i+1]);
    pairedArray.push([fruits[i],fruits[i+1]])
    i=i+2;
}

console.log("pairedArray:",pairedArray);
//===============================================================
//Is ovel present inside the name!?
let uname = "Vbacdu";
let ovels = ["a", "e", "i", "o", "u"];

function IsOvelIncluded(n){
    let count=0
ovels.forEach((ovel) => {
  if (n.includes(ovel)) {
    count++
  }
});
console.log(count);
if (count>0) {
     console.log("The name includes the ovel 😊!!!"); 
}
}

IsOvelIncluded(uname)

