let arr=[2,4,6,8,9];
arr.forEach(function (el){
    console.log(el);//el=elemenet
});
//map function
let arra=[6,8,9,7,6,65];
let double=arra.map(function(num){
    return num *2;
});
console.log(double);
let student=[
    {name:"raj",marks:24},//key value pair
    {name:"ravi",marks:25},
    {name:"raju",marks:26},
];
let gpa=student.map(function(el){
    return el.marks/10;
});
console.log(gpa);
//filter function
let arr1=[1,2,3,4,5,6,7,8,9];
let even=arr1.filter(el=>{
    return el%2==0;//el<2,el!=0; we can use this condtion also

});
console.log(even);
//every function --behave like and opertaor
let arr2=[2,4,6,8,9];
let isEven=arr2.every(el=>{
    return el%2==0;
});
console.log(isEven);//output-false becaiuse all arry must be follow condition
//some function--behave like or 
let arr3=[2,4,6,8,9];
let odd=arr3.some(el=>{
    return el%2!=0;
});
console.log(odd);//output-true because at least one element follows the condition
//reduce function
let arr4=[1,2,3,4,5,6,7];
let newarr=arr4.reduce((result,el)=>{
    return (result+el);
});
console.log(newarr);   
//example--find max elemnt in arry
let arr5=[2,3,5,67,8,6,5,5445,5];
let newarr5=arr5.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(newarr5);
//find min element in arrt
let arr6=[2,3,5,67,8,6,5,5445,5];
let newarr6=arr6.reduce((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
});
console.log(newarr6);
//spread
let arr7=[4,6,8,53,,789,8,75];
console.log(arr7);
console.log(...arr7);
let name="apnacollage";
console.log(name);
console.log(...name);//-triple dot use spred the value
//important spread finctiion
let name1="apnacollage";
let newname=[...name1];
console.log(newname);
//
function sum(...args){//step 2 argumnet steored
    for(let i=0;i<args.length;i++){
        console.log("rajtiwari",args[i]);//3 print arryindex with name
  
    }
}
sum(1,2,4);//step 1 argument gave
function min(a,c,d,f,g){
    console.log(arguments);
}
min(1,2,3);
//destructuring
let namee=["raj","ravi","raju","mohan"];
let [first,second,...third]=namee;
console.log(third);

