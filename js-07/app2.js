const student={ //1 this concept in object
    name:"raj",
    clas:"general",
    sex:"not doing",
    apartment:"not have",
    eng:54,
    maths:75,
    sst:88,
    getavg() {
      let avg = (this.eng+this.maths+this.sst)/3;//usethis to acces the object not directly we can use that object
      console.log(avg);
    }
  }
console.log(student.name);
student.getavg();//function call

function getavg(){//2 this concept in normal function
    console.log(this);//in this situation hs can pint out the global object not any particulaer object juyst likwe up situation
}
getavg();
//2 try and catch logic
console.log("hello");
console.log("hello");
let a=10;
try{
console.log(a);
}catch{
  console.log("raj");
}
console.log("hello");
console.log("hello");
console.log("hello");