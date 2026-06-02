//1.for each is a method of array which is used to iterate over each element of the array and perform a specific action on it. It takes a callback function as an argument, which is executed for each element in the array.
let arr=[2,4,68,7,2];

arr.forEach(function(el){ //use normal function
    console.log(el);
});
arr.forEach((el)=>{// use arrow function
    console.log(el);
});//el meanis print each element indivail of that arry
//2.map functiom=ek ke karke element ko exess karke array ke form me output deta hai
let arr1=[2,4,6,97,42,2];
let double=arr1.map(function(el){//use nooramal function
    return el*2;
});
console.log(double);
let double1=arr1.map((el)=>{//use a arroow function
    return el*3;
});
console.log(double1);
//3,filter functiom=according to your conditio give value in form of array
let arr3=[2,45,7,87,5,54];
let even=arr3.filter(function(el){
    return el%2==0;
});
console.log(even);
let odd=arr3.filter((el)=>{
    return el%2!=0;
});
console.log(odd);
//4,every function behave and(&) ki tarah if all true get-->true if one bhi false get false
let arr4=[3,5768,9,6,4,43,43,3];
let raj=arr4.every(function(el){
    el%2==0;
});
console.log(raj);//ouput false beacuse very array elemnt must T or F
let sam=arr4.every((el)=>{
    el%2!=0;
});
console.log(sam);
//5.some function behave or ki tarah
//6.reduce fiunctio give  single value just like T/F a but according to argument we can pass like add,sub,mul,divide
let arr5=[35,68,6,54,43,3,3];
let sum=arr5.reduce(function(res,el){//reduce fun store value in accumalotor and elemenet me
    return res+el;
});
console.log(sum);
let mul=arr5.reduce((res,el)=>{
    return res*el;
});
console.log(mul);
//7.find maximum elementin an arry so max ?? one value? using reduce fun it contain 2 argument one is acc and other element
let arr6=[3,5,78,9,31,53];
let max=arr6.reduce((res,el)=>{
    if(res>el){
        return res;
    }else{
        return el;
    }
});
console.log(max);
//8.spreead function =kisko element orcharcter ko phalana or spread karna
let raja=[..."rajkumartiwraihai"];///three times dot is important
console.log(raja);
//questuion practice find sqaure and sum of arry element using arrow function thgen find average
let arr7=[23,6,78,9,5444,4332,2];
let square=arr7.map((el)=>{
    return el*el;
});
console.log(square);
let add=arr.reduce((res,el)=>{
    return res + el;
});
console.log(add);
let average=add/arr7.length;
console.log(average);
//9. important 
function doubleAndReturnArgs(arr, ...args) {
    let doubledArgs = args.map(el => el * 2);
    return [...arr, ...doubledArgs];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // Output: [1, 2, 3, 8, 8]
//
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const user = { name: "Raj", age: 20 };
const course = { branch: "CSE", year: 2 };

console.log(mergeObjects(user, course));//call kiya 
