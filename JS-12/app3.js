  h1=document .querySelector("h1");

//   function changeColor(color,delay,nextColorChange){  //take one more argument
//     setTimeout(()=>{
//      h1.style.color=color;
//       if(nextColorChange) nextColorChange(); //if true huva, then aage exevte hoga and call  next function
//      },  delay);
//     }

//     changeColor("red",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("green",1000,()=>{
//                 changeColor("blue",1000,()=>{
//                     changeColor("pink",1000);
//                 });
//             });
//         });
//     });

    //replace using logic promising chainingg-->insted of print result we print object directly

    function changeColor(color,delay){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("change color");//resolve==sucess
            },delay);
        })
    }

    changeColor("red",1000)//call functiom->functoin store do and print next what we write
    .then(()=>{
        console.log("red color was completed");//print if fun store up value
        return changeColor("orange",1000);//we will call agin to store value if they are stored then next function will print
    })
    .then(()=>{
        console.log("orange color was completed");//print karvat hai
        return changeColor("green",1000);//call karvata hai only-to <store> data
    })
    .then(()=>{
        console.log("green color was completed");
        return changeColor("blue",1000);
    })
    .then(()=>{
        console.log("blue color was completed");
    });