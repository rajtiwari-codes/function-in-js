//functio start 
function raj(){
    console.log("hello bvro");
     console.log("hello bvro");
}
function print1to5(){
    let n=5;
    // raj();
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}
function askdate(){
    // print1to5();
    console.log("fuckofff");
}
//create a function to roll a dice and alwats the value from 1 to 6
function dice(){
   let ludo=Math.floor(Math.random()*6)+1;
   console.log(ludo);
}
function printname(name,age){
    console.log(name,age);
}
function add(a,b){//write varible which store valus which provide function call
    console.log(a+b);//write something which u want to opertion
}
//average of 3 no
function average3(a,b,c){
    console.log((a+b+c)/3);
}
Math.random(); //in browser it give F itmeans it is function 
//prrint a multiplication table
function table(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}

//all the fuction we  call from here

raj();//so each function jitne baar call karega utni baarvprint hoga
raj();
raj();

print1to5();//inside finction we will use for concept also

askdate(); //also one function write inside another person and that person can call another person
dice();
printname("tiwari",56);
add(5,9);//user pass the valuewhich they want toprint
average3(2,4,6);
table(2);