//Async function 
async function raj(){
    return "avenger";//alway return promises whwteher you can write or not in your fuction
    }
raj();

async function raja(){
    throw "404 not found raj"; //throw use to throww erroe in your window,it is not give erroe of any value it can print error
    return "grutes";
}
raja()
.then((result)=>{//then used if calling function suceess then print thtat statement
    console.log("promises was rsolved");
    console.log("result was: ",result);
})
.catch((err)=>{//used when in calling functionget ereeo print ths sttaeemnt
    console.log("promises was rejected wit err",err);
})

let demo=async()=>{ //in erroer function also used in asyne
    return 5;
};
// await keyword =>give output after accoedrding to our requirement
//eg let take color 
h1=document.querySelector("h1");

function changeColor(color,delay){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                h1.style.color=color;
                console.log(`color changed to ${color}!`);
                resolve("color changed!");//resolve==sucess
            },delay);
        })
    }

    //   changeColor("red",1000)//call functiom->functoin store do and print next what we write
    // .then(()=>{
    //     console.log("red color was completed");//print if fun store up value
    //     return changeColor("orange",1000);//we will call agin to store value if they are stored then next function will print
    // })
    // .then(()=>{
    //     console.log("orange color was completed");//print karvat hai
    //     return changeColor("green",1000);//call karvata hai only-to <store> data
    // })
    // .then(()=>{
    //     console.log("green color was completed");
    //     return changeColor("blue",1000);
    // })
    // .then(()=>{
    //     console.log("blue color was completed");
    // });
    //USING ASYNC AND AWIT WE WIL DO MRE SHOERTER 

    // function demo(){
    //     changeColor("red",1000);
    //      changeColor("yellow",1000);
    //       changeColor("blue",1000);
    //        changeColor("voilet",1000);
    //         changeColor("indigo",1000);//if we call get outpput at one time but we want output one by one after some time then?
    //          }

   async function demoo(){
       await changeColor("red",1000);
       await  changeColor("yellow",1000);
       await   changeColor("blue",1000);
       await    changeColor("voilet",1000);
                 changeColor("indigo",1000);
    }