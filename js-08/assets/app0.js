//1. write a arrow function that return the square of a number n
const square=(n)=>{
    return n*n;
};
console.log(square(5));
//2.write a function that print hello world 5 timews at interval of 2secounds

 let raj=setInterval(() =>{
    console.log("Hello World");
  },2000);

    setTimeout(()=>{ //setTimeout use rukh jata hai after given time so after 10sec stop 
    clearInterval(raj);//setinterval use to stop setinterval what that print
    },10000);
    //3write an arrow function that accept an array of number and the return the average of that numb
  
   let x =[2,4,6,89];
   const average = (x) => {
        let sum = 0;
        for(let i = 0; i < x.length; i++){
            sum = sum +x[i];
        }
        return sum / x.length;
    };

    console.log(average(x));
    //4 toocheck even or odd use arrow function
    const even=(n)=>{
        if(n%2==0){
            return "even";
        }else{
            return "odd";
        }
    }
    console.log(even(5));
    //5