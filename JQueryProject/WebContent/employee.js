/**
 * 
 */
function Employee(eno,ename){
	this.eno=eno;
	this.ename=ename;
	this.display=displayEmp;
}
function displayEmp(){
	$("#div2").html("Eno : "+this.eno+" Ename : "+this.ename);
}