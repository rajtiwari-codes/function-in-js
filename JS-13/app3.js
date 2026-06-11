//dog calling api genete imagae
let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";

//S-1
btn.addEventListener("click",async()=>{//on lciking button
   let link=await getImage();//call function

   let img=document.querySelector("#result");
   img.setAttribute("src",link);
});

//S=2
  async function getImage(){
try{
  let res=await axios.get(url2);//give output
  return res.data.message;
}
catch(e) {
    console.log("error ",e);
    return "no Image found";
}
  }
  //sending header using axios 
  const url="https://icanhazdadjoke.com/";
  async function getjokes(){
    try{
        const raj={headers:{accept :"application/json"}};//use logic to write
        let res =await axios.grt(url,raj);//send url and header
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
  }