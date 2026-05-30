console.log(2+7+98);
console.log("hello raj this is beginng of js journey so keep concistent bro");

let x="Raaz";
console.log(x[0]);
console.log(x.length);
console.log(x[x.length-1]);//important because index start from 0 index

let a=3;
let b=4;
console.log("Sum is: ", (a + b)+"ruppes");
//inside back trick write directly without any syntax requirement 
console.log( `sum is ${a+b} ruppees`)
//all opertor can used +-*/%**
let c=3;
let d=5;
console.log(c+d);
console.log(c++);
console.log(++c);
let age=18;
console.log(age>18);//o/p is false
'a'>'B'//false beacuse each alpha hasode r no accordinghly they can comparw

//conditional statement
let ages =13;
if(ages>=18){
    console.log("you can vote");
}if(ages<18){
    console.log("you can't vote");
}

let color="red";
//traffic light system
if(color==="red"){  //write inside quote
    console.log("stop bro");
}
else if(color==="yellow"){
    console.log("be ready");
}

else if(color==="green"){
    console.log("Go");
}
//questuion prctice
let str="apple";
 if((str[0]==='a') && (str.length>3)){
    console.log("good string");
}else{
    console.log("bad string");
}
alert("something is wrong bro");//alert use for imp alert use popop on your page
console.error("this is raj who make this error");// displat error message
console.warn("this is raj who make this this warning");
//logic is first name ko store kiya then print kiya
let firstName = prompt("enter your first name :");
let lastName = prompt("enter your last name :");
let fullname=firstName+" "+lastName;
console.log(fullname);
alert("welcome Raj");
