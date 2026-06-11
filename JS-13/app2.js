//print api in html document 

//S-1)logic is on pressing button-->S-2)call go function --> S-3and print that output

//S-1
let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{//on lciking button
    let fact=await getFacts();//call get function which can genete output

    //S-3
    let p=document.querySelector("#result");
    p.innerText=fact;
});



//S-2
let url="https://catfact.ninja/fact";

  async function getFacts(){
try{
  let res=await axios.get(url);//give output
  return res.data.fact;
}
catch(e) {
    console.log("error ",e);
    return "no fact found";
}
}