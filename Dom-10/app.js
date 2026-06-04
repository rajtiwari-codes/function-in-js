// let btn=document.querySelector("button");//acces button in js from html
// console.dir(btn);//get all the property of button

// // btn.onclick=function(){
// //     alert("someone click you");
// // };

// function raj(){ //using function to call 
//     alert("hiii");
// }
// btn.onclick=raj; 

let btns=document.querySelectorAll("button");//acces all button
for(btn of btns){//apply/select all button
    btn.addEventListener=sam;
    btn.onclick=raj;
    btn.onmouseenter= function (){//we we move your mouse on thta object then this property wil apply
        console.log("we use anothre dom method");
    }
}
function raj(){
    alert("UREKA bro");
}
function sam(){//not print because in onclick at one time one function can get output  
    console.log("used another metd finally");
}
