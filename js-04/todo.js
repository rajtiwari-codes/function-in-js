//to do basic app
let todo=[]; //initialse empty arry

let req=prompt("enter the the task which u want to add");//ask user what they want

while(true){//while use because lopp chalte rahnae chaiye till user not quit
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){ 
        console.log("-----------")//for better view
        for(let i=0;i<todo.length;i++){//all the list of elemnt excess with index
            console.log(i,todo[i]); 
        }
        console.log("--------");
    }else if(req=="add"){
        let task=prompt("pls enter the task what u want to add ");//what u want to add
        todo.push(task);//push  todo
        console.log("task added");
    }
     else if(req=="delete"){ //delete using idx 
        let idx=prompt("pls enter the index of task which u want to delete");//which index u want to delete
        todo.splice(idx,1); //splice used delte a particular portion
        console.log("task deleted");
     }else{
        console.log("wrong request bro");
     }
     req=prompt("pls enter yur request");
} 