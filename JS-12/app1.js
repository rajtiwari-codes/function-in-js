function savetoDb(data,sucess,failure){//step 1 data is send by user 
    let internetspeed=Math.floor(Math.random()*10)+1;//if netwrok speed is grater than 4 data stored print if not nit stered
    if(internetspeed>4){
        sucess();
    }else{
        failure();
    }
}

savetoDb("raj",()=>{
    console.log("sucess: data is saved");
    savetoDb("tiwari",()=>{
    console.log("sucess2: data2 is saved");
    savetoDb("avenger",()=>{
    console.log("sucess3: data3 is saved");
    },
    ()=> {
        console.log("failure3 :weak connecton");
    });
},
 ()=> {
        console.log("failure2 :weak connecton");
    });
},
 ()=> {
        console.log("failure :weak connecton");
    });

//BIG /\ observe only??if one data is succesthen call another fun to check another data if sucees then check anther data for calling
//reslove or simply concept promises-->it give object as a result instead of sucess=resolve and failure=reject



