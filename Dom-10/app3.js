//2.keyborad  event previously we lern 1.pointer event 
let inp=document.querySelector("input");

// inp.addEventListener("keyup",function(){
//     console.log("key ws pressed");
// });

// inp.addEventListener("keydown",function(){
//     console.log("key ws pressed");
// });
// inp.addEventListener("keypress",function(){
//     console.log("key ws pressed");
// });

//3.ketboard event contain default event which cantain code and key
// inp.addEventListener("keydown",function(){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
// });

//4.practice 
// inp.addEventListener("keydown",function(event){
//        console.log("code=",event.code); //event code are predefined it means arrow,down,left,right are already exist
//        if(event.code=="ArrowUp"){
//         console.log("character moves forward");
//        }
//        if(event.code=="ArrowDown"){
//         console.log("character moves down ");
//        }
//        if(event.code=="ArrowLeft"){
//         console.log("character moves left");
//        }if(event.code=="ArrowRght"){
//         console.log("character moves right");
//        }

// });

//5.form event
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){ //submit is event ??predefined 
//     event.preventDefault();//we use prrevenyt default because if in form action link are not cvalid we get default page to prevent his we can use 
//     console.log("form submitted sucessfully");
// });
//6 how to acees informatio which are submitted

let form=document.querySelector("form");
form.addEventListener("submit",function(event){//step 1 use sumiite event
    event.preventDefault();

    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);//sep2 inp.value
});

