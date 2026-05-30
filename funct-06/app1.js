function add(a,b){
    console.log("hello bro"); //but that add function not write here they will write outside this functi
     return a+b;
}
let s=add(3,4);
console.log(s); 
//take no ang givr thee sum of that no
function sum(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sum(1000));
//creat a funvtion that return concetation of all string in array
 let str=['raj','kaushik','shukla' ,'buddy'];
 function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){ 
        result=result+str[i];
    }
    return result;
 }
 console.log(concat(str));
 //lexical finction logiv
 function outerfun(){
    let x=3;
    let y=6;
    function innerfun(){
        console.log(x);
    }
    innerfun();
 }
 outerfun();
 //higher oreder function example
 let odd=function(n){
    console.log(n%2!=0);
 }
     odd(5);
 let even =function(n){
  console.log(n%2==0);
}
even(57);  
//step 1 make a macchinw which test odd or even
function oddeventest(req){//make machine so user cvan send req
  if(req=="odd"){
    let odd= function(n){//odd store=function n
    console.log(n%2!=0);//that function used to test odd or not
    }
    return odd;//return that function to user
  }else if(req=="even"){
    let even=function(n){//store in function
        console.log(n%2==0);//that function check
    }
    return even;
  } else{
    console.log("wrong request");
  }
}
let req="odd"; //user request to test odd or even
let test=oddeventest(req);//that function store in test variable
test(3);
//method ??
const calculator={
  add(a,b){
    return a+b;
  },
  sub(a,b){
    return a-b;
  },
  mul(a,b){
    return a*b;
  },
};
console.log(calculator.add(10, 5));
console.log(calculator.sub(10, 5));
console.log(calculator.mul(10, 5));
