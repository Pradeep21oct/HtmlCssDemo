/// <reference path = "Animal.ts" /> 
class Snake extends Animal{
  constructor(name:string){ 
     super(name); 
  }
  move(meters=5){
   alert("Slowly");
   super.move(meters); 
}
}