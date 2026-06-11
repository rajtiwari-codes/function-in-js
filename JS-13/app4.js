// we use university api-->in html search country nmae  and get value in html not in console or js
//
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

//S-1 on clicking button country name enetered by user S-2 call to genetre clg nae
btn.addEventListener("click",async()=>{
let country=document.querySelector("input").value;
console.log(country);

//S-3
let colArr=await getCollage(country);//that country collage which u get call another function for making list
show(colArr);
}
);

//S-4making list of that clg and print UI browser
function show(colArr){
let list=document.querySelector("#list");//access the list
list.innerText="";
for(col of colArr){
    console.log(col.name);

    let li=document.querySelector("li");
    li.innerText=col.name;
    list.appendChild(li);
}
}




//S-2  generte clg according to the input of country
async function getCollage(country){
    try{
    let res=await axios.get(url+country);
    return res.data;
    }catch(e){
        console.log("error is :",e);
        return [];//return empty array if erroe can come
    }
}