//questio practice --1
let num=100;
if(num%10==0){
    console.log("GOOD");
}
else{
    console.log("bad");
}
let fullname=prompt("enter your full name :");//--- 2
let age=prompt("enter your age");
let total=fullname + " " +age;
console.log(total);
alert("name is " + age + " year old");

let number="3";//--3
switch(number){
    case"1":
    console.log("jan,feb,march");
    break;
     case"2":
    console.log("apr,may,june");
    break;
     case"3":
    console.log("july,aug,sept");
    break;
     case"4":
    console.log("oct,nov,dec");
    break;
    default:
        console.log("invalid input");
}
let str="aeroplane";//----4
  if((str[0]==='a' || str[0]==='A') && (str.length>5)){
    console.log("golden string");
  }else{
    console.log("not a golden string");
  }
  let a=2,b=3,c=4; ///---5
  if(a>b){
    if(a>c){
      console.log("a is the largest");
    }else{
      console.log("c is the largest");
          }
        } 
  else{
      if(b>c){
        console.log("b is the largest");
      }else{
        console.log("c is the largest");
      }
    }
    ///----6 simple issue is both no predefined hai but i want to take by user so add something
  let x=101%10;
  let y=10201%10;
  console.log(x);
  console.log(y);
  if(x==y){
    console.log("last digit is same");
  }else{
    console.log("last digit is different");
  }
  //--6 but with user input
  let input1=prompt("enter first number :");//take input by use as a string
  let input2=prompt("enter second number :");
  let num1=Number(input1);//chnage string in number
  let num2=Number(input2);

  let raj=num1%10;   //that no come in funvction
  let sam=num2%10;
  console.log(raj);
  console.log(sam);
  if(raj===sam){
    console.log("last digit is same");
  }else{
    console.log("last digit is different");
  }