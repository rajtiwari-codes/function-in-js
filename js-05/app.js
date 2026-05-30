//1-object literals--value are store in 
let student={
    name:"raj",//(key,value) pair hai bro
    rollno:45,
    class:2,
    textach:"english",
};
console.log(student);
//2-value are stored in array
let student1=["raj",45,2,"english"];
console.log(student1);
const item={
    price:100.23,
    discount:50,
    color:["red","yellow"]
};
console.log(item);
//3-create a objeect literal for the properties of twitter post
const post={
    name:"@rajtiwari432",
    content:"learn a new way of thinking",
    likes:200,
    repost:"7.2K",
    tag:["@raaj","@apnaclg","@dot"]
};
console.log(post);//print all value but if u want to get particular value see down
console.log(post.likes);//for particular value-
//4-js object key convert into string autoamtically 
const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
console.log(obj[1]);//1 is not a no it is behave like a string
console.log(obj.null);
//5 how to chnage /add any existing value
 const games={
    1:"templerun",
    2:"ping pong",
    3:"clockway",
    4:"doodleway"
 };
 console.log(games[1]);//elemnt excess
 games[1]="cycleriding";//output ko --(replace)-- kiya
 console.log(games[1]);//print that output
 games.gender="female";//--add-- directly in that list
 console.log(games);
 games.list=["shukla","kashish","kaushuk"];
 console.log(games);
 //objectof objects
 const classinfo={
    raj:{
        marks:22,
        favourite:"money",
        goal:"becomegod",
    },
    rahan:{
        marks:55,
        favourite:"volleyball",
        goal:"cgpa",
    },
    ritesh:{
        marks:76,
        favourite:"shilpa",
        goal:"industry",
    }
 };
 console.log(classinfo);
 console.log(classinfo.raj);
 classinfo.raj="kashuikvaliya";
 console.log(classinfo);
   //arry of object 
   const x=[
    {
        name:"raj",
        marks:876,
    },
    {
        name:"raja",
        marks:76,
    },
    {
        name:"rahul",
        marks:98,
    },
];
console.log(x);
console.log(x[0]);
console.log(x[0].name);