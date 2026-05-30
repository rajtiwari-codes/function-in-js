let x = [3, 5, 89, 5, 32, 1];//delete particular element
 let num=5;
 for(let i=0;i<=x.length;i++){
    if(x[i]===num){
    x.splice(i, 1);
  i--;
 }
} 
console.log("array after deletion", x);
//no of digit in a no
let no=23445;
let count=0;
while(no>0){
    count++;//cont tell how many digit u have
    no=Math.floor(no/10);
}
console.log(count);
//sum of digit of no
let nums=654337;
let sum=0;
while(nums>0){
    let digit=nums%10;
    sum=sum+digit;
    nums=Math.floor(nums/10);
}
console.log(sum);
  //generate a random no rep a dice
  let dice=Math.floor(Math.random()*6)+1;//it incluse a 4 step loigcally
  //another question 
  let a=Math.random();//step-1 chose a rando no 
  a=a*6;//max no what u want 
  a=Math.floor(a);//it give a integer value
  a=a+1;//so integer give value between 0 to 1 but 1 is excluded that why i wil add 1
  console.log(a);
  //generate a random no between 1 to 100
  let raj=Math.floor(Math.random()*100)+1;
  console.log(raj);
  //generate a random no between 21 to 25
  let raja=Math.floor(Math.random()*5)+21;//logic genete a no teill max =5 then add according to jarurat
  console.log(raja);