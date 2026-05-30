//decide the user max range they want to guess

const max=prompt("enter the max no u want to guess");

 const random=Math.floor(Math.random()*max)+1;//random no generate by s/o

  let guess=prompt("guess the no");

  while(true){
    if(guess=="quit"){
        console.log("you quit bro");
        break;
    }
    if(guess==random){
        console.log("Ureka!! you wll found ", random);
        break;
    }
    else if(guess<random){
        
        guess=prompt("hint: your guess was too small. please try again");
    }
    else{
         guess=prompt("hint: your guess was too large , pls try again");
    }
  }  
