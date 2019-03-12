class Greeting { 
   greet():string { 
      return("Hello World!!!") 
   } 
} 
var obj = new Greeting(); 


document.body.innerHTML =obj.greet();