let x="avengers";//--1
console.log(x.toLowerCase());
let y="AVENGERS";
console.log(y.toUpperCase());
let raj=("ihavetodoit");
console.log(raj.indexOf("h"));//--2
console.log(raj.indexOf("m"));
console.log(raj.indexOf("t"));
let names =("  avenger enf Games  ");//--3 listen name built in function in js
let newName=names.trim().toUpperCase();
console.log(newName);
let kaus="samalatman";
let newkaus=kaus.slice(2); //last assenme length
let newkaush=kaus.slice(0,3);// last index excluded
let newkausha=kaus.slice(-3); //(- means (length-3)
console.log(newkaus);
console.log(newkaush);
console.log(newkausha);
let students=["raj","aman" ,"shuhukla","kaushik"];//arrt sratr  
console.log(students);
let no=[2,4,6,8,10];
console.log(typeof no);
let faa=["Rajavenger"];
console.log(faa[0]);
console.log(typeof faa); //object
let abhi=[];
console.log(abhi);
let numss=[3,44,66,8];
 numss[0]=100;
 console.log(numss); ///array are muttable but in string not poosible
 //question m-1
 let months=["jan","july","march","august"];
  months[0]="july";
  months[1]="june";
  console.log(months);//m-2 also do by shift and unshift method
  months.shift();
  months.shift();
  months.unshift("june");
  months.unshift("july");
  let nums=[[1,6], [6,9],[90,5]];//array start
  console.log(nums); 
  console.log(nums[0]); //it means0 inex element
  console.log(nums[0][0]); //it means 0 index ka 0 index element--1
  //-1-questin making a tic tac toe
  let games=[["X",null,"O"],[null,"X",null],["O",null,"X"]];
  console.log(games);
  games[0][1]="O";//changing some value
  console.log(games);
  let arra=[7,6,89,4,5];//--2 to get n number of  elemnt in an arry
  let n=3;
  console.log(arra.slice(0,n));
  let l=[34.4,65,78,,54,33,3,4,5,6];//--3 to get last n elemntof an aaary
   let m=4;
   console.log(l.splice(length-m));
let kaushik=prompt("enter the value of string");//--4 chech string is empty or not
if(kaushik.length===0){
    console.log("empty");
}else{
    console.log("fill");
}
//chech at given index string is upper or lower
let kash="rajTIYAtbkhs";
let v=5;
if(kash[v]>='a' && kash<='z'){
    console.log("lowercase");
}else{
    console.log("uppercase");
}
//in js check in  array an elemnet exist or not
let element=[4,6,8764,3,3];
let check=6;
if(element.includes(check)){
    console.log("element exist");
}else{
    console.log("element not exist");
}
//remove space from string
let space="   rajavenger   ";
let newspace=space.trim();
console.log(newspace);