//1.json how to access data --->using fetch
//M-1 JSON  data into jsonobject

let jsonRes=
'{"data":[{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114}]}';

// console.log(jsonRes.fact);
//we want only facr ka data but output is undefined because we deal json data not json onject we have to convert it first

let validRes=JSON.parse(jsonRes);//change json data to json object
console.log(validRes.fact);

// M-2 json object into json data
let student={
    name:"john",
    age:20,
    city:"new york"
}
let jsonStudent=JSON.stringify(student);//change json object to json data
console.log(jsonStudent);

//2.request to api from js

// let url="https://catfact.ninja/fact";
// fetch(url)                       //it give promise so use then and catch method

// .then((res)=>{            //give response if  url is correct
//     console.log(res);      //print in form of code 
//     return res.json();      //to make readable form in console -->but want that url only jokr not extra content 
// })
// .then((data)=>{                //if we get resolnse then 
//     console.log(data.fact);   //to get specficinfoemation waht you want
// })
// .catch((err)=>{               //if erroe come print that erro ?? if link was not correct
//     console.log("error::",err);
// });

//if u want to send more request used method of chaining in this 

//3.use of async and await in api

let url="https://catfact.ninja/fact";

async function getFact(){
try{
  let res=await fetch(url);//give output
  let dat =await res.json();//make readable form
  console.log(dat.fact);//actual daya prit what we want 

  //if you want to do ore requst

   let res2=await fetch(url);//give output
   let dat2 =await res.json();//make readable form
   console.log(dat2.fact);//actual daya prit what we want 

}catch(e) {
    console.log("error ",e);
}
}
  //note if we get error then  further function not run so we use try and catch method

  // acces data using axious
let urls="https://catfact.ninja/fact";
  async function getFacts(){
try{
  let res=await axios.get(urls);//give output
  console.log(res.data.fact);//actual daya prit what we want 
}
catch(e) {
    console.log("error ",e);
}
}