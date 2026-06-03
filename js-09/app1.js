//1.add a <p> with red text that says "hey i am red" using js

let para=document.createElement("p"); //create use createElemnet logic
para.innerText="hey i am  a red";// write use innertext
document.querySelector("body").append(para);//add use append
//to add the color we can use logic class list 
para.classList.add("red");

//2.add a <h3> wuith blue textb that says "i ma a blue h3!"

let h3=document.createElement("h3"); //create use createElemnet logic
h3.innerText="hey i am  a h3!";// write use innertext
document.querySelector("body").append(h3);//add use append
//to add the color we can use logic class list 
h3.classList.add("blue");

//3. create adiv with balck borderand pink background color inside div contain h3 and p which say something
 let div=document.createElement("div");
 let h1=document.createElement("h3");//step 1 create
 let p=document.createElement("p");
 
 h1.innerText="i am a div"; //step2 write
 p.innerText="mee too";
 
 div.append(h1);//step 3 add
 div.append(p);

 div.classList.add("box");//used to add color and backgrund
 document.querySelector("body").append(div);

//more questn pracrtice on notes see