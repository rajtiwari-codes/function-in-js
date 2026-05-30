for(let i=1;i<=5;i++){
    console.log(i);
}
for(let i=1.5;i<=9.6;i++){
    console.log(i);
}
// for(let i='a';i<='z';ch++){//??? in future dothis code
//     console.log(i);
// }
for(let i=10;i>=1;i=i-3){
    console.log(i);
}
//print odd no from 1 to 15 method 1
for(let i=1;i<=10;i++){
    if(i%2!=0){  //for even no i%2==0
        console.log(i);
        }else{
            continue;
        }
}//method-2
for(let i=1;i<=11;i=i+2){  //for even i=2;i<=12;i=i+2 
    console.log(i);
}
//print multiplication table from 1 6or n
let n=prompt("Enter the number");
n=parseInt(n);//use string ko no me cahnge karne ke liye
for(let i=1;i<=10;i++){
    console.log(`Output is:${n*i}`);
}
//loop nested
for(let i=1;i<=3;i++){
  for(let j=1;j<=3;j++){
    console.log(j);
  }
}
// // question  favouriye movie method--1
// const favourites="Avatar";
// let guess=prompt("enter your favorute movie");
// while((guess!=favourites)&&(guess!="quiet")){
//     console.log("wrong guess!! baddie");
//     guess=prompt("please guess again!!!");
// }
// if(guess==favourites){
//     console.log("you guess right bro");
// }
// // method 2
//  const favourite="Avenger";
//  let guesss=("guess the favourite movie");
//  while(guesss!=favourite){
//     if(guesss=="quiet"){
//         console.log("yuou quiet");
//         break;
//     }
//     console.log("your guesss is wrong !! please try again");
//  }
//  if(guesss==favourite){
//     console.log("congrat!!! baddie");
//  }