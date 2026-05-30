let fruit = ['banana', 'apple', 'orange', 'grapes', 'papaya'];
fruit.push('mango');
console.log(fruit);
for (let i = 0; i < fruit.length; i++) {
    console.log(i, fruit[i]);//print index with fruit name
}
for(let i=fruit.length-1;i>0;i--){
    console.log(i,fruit[i]);//print index with fruit name in reverse order
}
//nested lop with nested arry
let hero=[['ironmam','spiderman','thor'],['superwoman','wonderman' ,'thor']];
for(let i=0;i<hero.length;i++){
    console.log(i,hero[i]); // it means 0 insex me present saare elemenet
    for(let j=0;j<hero[i].length;j++){
        console.log(j,hero[i][j]);
    }
}//another question
let student=[['raj',50],['karan',60],['roham',70],['shukla',80]];
for(let i=0;i<student.length;i++){
    console.log(`student info:${i}`);//outer element ke saare length elemnt print kiya 
}for(let j=0;j<student[i].length;j++){
        console.log(j,student[i][j]);//inner element ke saare length elemnt print kiya 
    }
