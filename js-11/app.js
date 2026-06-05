//bubbling event
let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div is cliscked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();// to stop event bubbling
    console.log("ul is cliscked");
});
for(liss of lis){ //because we have to excess all list
liss.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("div is cliscked");
});
}