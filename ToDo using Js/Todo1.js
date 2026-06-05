let btn=document.querySelector("button");    //access the elemenet
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

    btn.addEventListener("click",function(){
    let item=document.createElement("li");                               //li assighn in var
    item.innerText=(inp.value);                                          //inp go to the var 

//only create delete button with all elemnt 
    let delBtn=document.createElement("button");               //button assume as var 
    delBtn.innerText="delete";                                 //inside btn write delete
    delBtn.classList.add("delete");                            //use class proprty acces delbtn
    item.appendChild(delBtn);                                  //present ??all li ke pass

    ul.appendChild(item);                                               //position? child of ul ?? li
    inp.value="";                                                       //aftr assign inp value are claer
});

//logic fo delete
    //  let delBtns = document.querySelectorAll(".delete");      //all the delbtn acces using there class
    //  for(delBtn of delBtns){                                  //grouping all btn
    //  delBtn.addEventListener("click",function(){              //apply click event on delbtn
    //  let par=this.parentElement;                              //this?? who call? btn?/parent??<li>
    //  console.log(par); 
    //  par.remove();
    // });

//the (problem) is addEvent listner work on only existing value not new valuse which we are create so concept
//EVENT DELEGATION -->pheneome of bubling, apply event in there parents so automaticcaly new elemnt accept it
//parent??button li or ul let take  ul

ul.addEventListener("click",function(event){                     //event?action? target?whwere u are clicking if they are Button they delete there parent child? btn parent ?li
    if(event.target.nodeName=="BUTTON"){
     let listItem=event.target.parentElement;
     listItem.remove();
     console.log("deleted");
    }
});
 