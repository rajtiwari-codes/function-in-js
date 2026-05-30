//2 write a js function that return  a array element larger tan a number
let arr=[44,66,89,7,66];
let num=50;
let result=[];
function largernum(arr,num){ //pass 2 argument array and number
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            result.push(arr[i]);
        }
}
return result; //return  do inside the main function block not inside the loop
}
console.log(largernum(arr,num));

//3 Write a JavaScript function to extract unique characters from a string

    function uniqueChars(str) {
    let result = "";          // Store unique characters here
    for(let i = 0; i < str.length; i++) {   // Visit each character
    if(!result.includes(str[i])) {      // If character not already in result
            result=result + str[i];               // Add it to result
        }
    }

    return result;          // Return inside main functuion
}
console.log(uniqueChars("abcdabcdefgggh"));
// //4 Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output. 
let arr = ["Canada", "United States", "Mexico", "Brazil", "Argentina"];
let max="";
for (let i=0; i<arr.length; i++){
    if(arr[i].length>max.length){
        max=arr[i];
    }
}
console.log(max);

// 4 Write a JavaScript function to count the number of vowels in a String 
let str="Hello World";
str=str.toLowerCase(); //convert string to lower case to count both upper and lower case vowels
let count=0;
for(let i=0; i<str.length; i++){
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        count++;
    }
}
console.log(count);

//5 Write a JavaScript function to generate a random number within a range 
//(start, end).
let str=Math.floor(Math.random()*10)+1; //generate random number between 1 and 10
console.log(str);
let str2=Math.floor(Math.random()*5)+20; //generate random number between 20 and 2
console.log(str2);

function random(start, end) {
    let x=Math.floor(Math.random() * (end - start + 1)) + start; //generate random number between start and end
   return x;
}
console.log(random(1,10)); //generate random number between 1 and 10
console.log(random(20,25)); //generate random number between 20 and 25