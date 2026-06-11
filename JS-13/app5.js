// we use university api-->in html search country nmae  and get value in html not in console or js
let url="https://colleges-api-india.fly.dev/colleges/";
let btn=document.querySelector("button");

//S-1 on clicking button country name enetered by user S-2 call to genetre clg nae
btn.addEventListener("click",async()=>{
let state=document.querySelector("input").value;
console.log(state);

//S-3
let colArr=await getCollage(state);//that country collage which u get call another function for making list
show(colArr);//calling another function for making list
}
);

//S-4making list of that clg and print UI browser
function show(colArr){
let list=document.querySelector("#list");//access the unorederd list using there id
list.innerText=""; //innertext after each serch become empty
for(col of colArr){ //all the clg name group
    console.log(col.name);

    let li=document.createElement("li");//we have crete li element not access
    li.innerText=col.name;//all clg nameput inside list
    list.appendChild(li);//location?? li ke child  ul me
}
}
//S-2  generte clg according to the input of country
async function getCollage(state){
    try{
    let res=await axios.get(url+state);//await use beacuse async is asychronuous function
    return res.data;
    }catch(e){
        console.log("error is :",e);
        return [];//return empty array if erroe can come
    }
}
//problem is api not suppeorted only