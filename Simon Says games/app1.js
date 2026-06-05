let gameSeq=[];                                              //to store event
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;                                           //initiallly games not started
let level=0;

let h2=document.querySelector("h2");

//S-1 when we press the key games started 
document.addEventListener("keypress",function(){                     //keypress?/if we press the any key
    if(started==false){                                              //if initial games not staerted
    console.log("games is started");
    started=true;                                                    //if one times start when pres again not stated again

    levelUp();
                                                        
    }
});

//S-2 btn flash and level up
function btnFlash(btn){
    btn.classList.add("flash");                            //acces color using classlist proprty
    setTimeout(function(){                                 //color remove after few secound
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    level++;                                               //level increse
    h2.innerText=`Level ${level}`;                         //that level refelect in heading

    //which button choose or which button is flash?
    let randIdx=Math.floor(Math.random()*3);                     //acees color which are fixed using  idx
    let randColor=btns[randIdx];                                 //randIdx ka color put randcolor
    let randBtn=document.querySelector(`.${randColor}`);         //that color put in randBtn
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    btnFlash(randBtn);                                     //call in btnFlash <pass??-randBtn?/
}

//S-3 when again btn press check ??userseq and gameseq ?if same level++,but diffrent games quit
function btnPress(){
    console.log(this);                                                      //it tell which button is pressed
    let btn=this;
    btnFlash(btn);                                                          //randbtn which you are press and know using this put flash 

}
let allBtns=document.querySelectorAll(".btn");                              //acees all btn
for(btn of allBtns){                                                        //group in var
    btn.addEventListener("click",btnPress);                                 //when any btn click ? call another fun
}