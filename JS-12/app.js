//call stacks logic
function one(){
    return 1;
}

function two(){
    return one()+one();
}

function three(){
    let ans=two() +one();
    console.log(ans);
}

three();

//js as a single thredaed nature but how they do 2 work at same time-->browser can do restwork
setTimeout(()=>{
    console.log("raj");//S-2
});
setTimeout(()=>{
    console.log("tiwari");//S-2
});
console.log("avengers");//S-1

//problem with asyncronouws anture

h1=document .querySelector("h1");

// function changeColor(color,delay){
//     setTimeout(()=>{
//        h1.style.color=color;
//      },  delay);
    
// }
// changeColor("red",1000);
// changeColor("orange",1000);
// changeColor("green",1000);

//but problen is i want if my red color get erroe not forawrd function was run so?? logic<CALLBACK HELL>

function changeColor(color,delay,nextColorChange){  //take one more argument
    setTimeout(()=>{
       h1.style.color=color;
       if(nextColorChange) nextColorChange(); //if true huva, then aage exevte hoga and call  next function
     },  delay);
    }
    changeColor("red",1000,()=>{
        changeColor("yellow",1000,()=>{
            changeColor("green",1000,()=>{
                changeColor("blue",1000,()=>{
                    changeColor("pink",1000);
                });
            });
        });
    });
    //CALLBACK nesting -->>call back hell