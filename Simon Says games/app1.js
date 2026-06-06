let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;                                                                            //initiallly games not started
let level=0;

let h2=document.querySelector("h2");

//S-1 when we press the key games started 
document.addEventListener("keypress",function(){                                //keypress?/if we press the any key
    if(started==false){                                                         //if initial games not staerted
    console.log("games is started");
    started=true;                                                               //if one times start when pres again not stated again

    levelUp();                                               //call another step-2
                                                        
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
    userSeq=[];                                                         //when level up userseq click fro starting so reset there arry
    level++;                                               //level increse
    h2.innerText=`Level ${level}`;                         //that level refelect in heading

    //which random button choose or which button is flash?
    let randIdx=Math.floor(Math.random()*3);                      //acees color which are fixed using  idx
    let randColor=btns[randIdx];                                 //randIdx get of our color put randcolor
    let randBtn=document.querySelector(`.${randColor}`);         //randcolor color put in randBtn
    gameSeq.push(randColor);//color generte by games store games seq
    console.log(gameSeq);

    btnFlash(randBtn);                                     //call in btnFlash <pass??-randBtn?/
}

//S-4 check condition userseq and gamesseq
function checkAns(idx){                                                                 //check?  2 condition (a)userseq and gameseq last value ko campre-if same then level++ otherwise again start (b)if miidle check in gamesSEq then check till lastidx then level up
  if(userSeq[idx]===gameSeq[idx]){                                                      //check at last idx
    if(userSeq.length == gameSeq.length){                                               //if same 
        setTimeout(levelUp,1000);//level up if same
    }
  }else{
         h2.innerHTML =`Game Over! Your score was <b>${level}</b><br>Press any Key to Start.`;                            //if diff in heading refelect start again and level shown
         document.querySelector("body").style.backgroundColor="red";//backgrond color become red and only few secound only 
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

         },150);

          reset();//if we click wrong then reset userseq S-5
}
    }





//S-3 when again any btn press then light flash-->userseq and gameseq ??
function btnPress(){                                                         //this tell which button is pressed
    let btn=this;
    btnFlash(btn);                                                           //randbtn which you are press and know using this put flash 

    userColor=btn.getAttribute("id");                                         //user whivh button press store?? usimg there btn id which btn is pres can acces by id 
    userSeq.push(userColor);                                                  //push userseq but check after pushlast elemnt of both user and gameseq-->are they same or not
    
    checkAns(userSeq.length-1);                                                            //call stet4 for checking games and userseq//pass? userseq ka last index ko omly check

}
let allBtns=document.querySelectorAll(".btn");                               //acees all btn
for(btn of allBtns){                                                         //group in var
    btn.addEventListener("click",btnPress);                                  //when any btn click ? call another fun
}

//S-5 when we press wrong game-games start again everything??
function reset(){
    started =false;//games is not started initaiily
    gameSeq=[];
    userSeq=[];
    level=0;
}
