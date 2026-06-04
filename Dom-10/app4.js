let form=document.querySelector("form");
form.addEventListener("submit",function(event){//to prevent default action
    event.preventDefault();
});

let  user=document.querySelector("#user");//using id acess input

user.addEventListener("change",function(){//change is an event
    console.log("change event");
    console.log("final value =", this.value);
});

user.addEventListener("input",function(){//input is an event
    console.log("input event");
    console.log("final value =", this.value);
});