const prompt = require('prompt-sync')();
const number = prompt('Enter a Number: ');
var num = number;
  
 if(num===1) {
          console.log("its not prime");
       } else if(num === 2){
              console.log("its prime");
       }else{
        for(var x = 2; x < num; x++)
        {
          if(num % x === 0)
          {
            console.log("its not prime");
          }
        }
        console.log("its prime"); 
      }
    // prime number have some problem