///<reference path="IAnimal.ts"/>
class Animal implements IAnimal{
  name:string;
  constructor(theName:string){
   this.name=theName;
  }
  move(meters:number=0){
     alert(this.name+" moved" +meters +"m.");
  }
}