// //this in event listener topic 1
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");
// let btn=document.querySelector("button");

// //use function lgic
// function add(){
//     console.log(this.innerText);
//     this.style.backgroundColor="red";
// }

// h1.addEventListener("click",add);

// h3.addEventListener("click",add);

// p.addEventListener("click",add);

// btn.addEventListener("click",add);

// // btn.addEventListener("click",function(){
// //     console.log(this);//this??who can call ?/h1
// //     btn.style.backgroundColor="red";
// // });
// //problem is repition but for good programmer dont write repition use function logic make 1 one fiunction and call them


//topic 2 keyborad event
let btn=document.querySelector("button");
btn.addEventListener("click",function(event){ //event?/pointer event?/arrow move when mouse go do aage piche
    console.log(event);//it cantain main proprty 
    console.log("button was clicked");;
});