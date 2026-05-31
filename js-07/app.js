//arrow function 
const sum=(a,b) =>{
    console.log((a+b));
}
sum(5,10);
const cube=(n)=>{
    return n*n*n;
}
console.log(cube(3));
const power=(a,b)=>{
    return a**b;
}
console.log(power(2,3));
const helo=()=>{
    console.log("Hello world");
}
helo();
//settimeout function
setTimeout(()=>{
console.log("hii raj !");
},4000);
//set interval

let id= setInterval(()=>{
    console.log("hii rajj");
},3000);
clearInterval(id); 
//this?? in normal and arrow function
const student={
    name:"raj",
    age:24,
    prop:this,
    getname:function(){//noraml fun here this ?? who call so print student detal
    console.log(this);
// return this.name;
    },
    getInfo1: function (){//arrow  functiosn this?? parent  so in this paerent kon hai function see up uska context student hai to print //student//
        setTimeout(()=>{
            console.log(this);
        },2000);
    },
    getInfo2: function (){
        setTimeout(function(){//normal function this?? who call so function hi call kar raha see up line so finction this ??// window//
            console.log(this);
        },3000);
    },
};
student.getInfo1();
student.getInfo2();