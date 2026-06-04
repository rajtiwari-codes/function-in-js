let btn=document.querySelector("button");//acces the button  (step 1)

btn.addEventListener("click",function(){//more tahn 2 action can performed

    let h1=document.querySelector("h1");
    let rgbgen=genrandom();
    h1.innerText=rgbgen;//not directly call he function so storeany anotherv then call(step 3)

    let div=document.querySelector("div"); //step4
    div.style.backgroundColor=rgbgen;

    console.log("color updated");
});

//let genearte rgb valuse so use maths logic hence when call they genetre value with color(step2)
function genrandom(){
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);

let color=`rgb (${red},${green},${blue})`;
return color;
}