//promises logc to resole call bacj in jsinsted of give resolve and reject it give object as a output
function savetoDb(data){
    return new Promise((resolve,reject)=>{//promise is predefined logic
        let internetspeed=Math.floor(Math.random()*10)+1;
         if(internetspeed>4){
        resolve("sucess: data was saved");
    }else{
        reject("failure :weak connection");
    }
    });
}

// savetoDb("apna collage")                               //use two method in promises//if data was saved 
// .then(()=>{                                            //if resolved after thaat write this
//     console.log("promises was resolved");
// })                                                      //if reject write this
// .catch(()=>{ 
//     console.log("promises was rejected");
// });

//promise chainng //
savetoDb("apna collage")//data was saved if netwrokspped > 4
.then((result)=>{                   //any condition sucess or failue it give value so for that valuewe have to pass in calling
    console.log("data 1 saved"); //print if data was aved 
    console.log("result of promises:",result);
    return savetoDb("helll broo");//store this value if data1 is print or work
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promises:",result);
    return savetoDb("avenger");
})
.then((result)=>{
    console.log("data 3 saved");
    console.log("result of promises:",result);
})
.catch((error)=>{//if any then error occur so it can catch aeasily
    console.log("promses was rejected");
    console.log("error of promises:",error);;
});