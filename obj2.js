/*var person=new Object();

person.firstName="Avadhesh";
person.lastName="Yadav";
person.fullName=function () {
	return this.firstName+" "+this.lastName;
}*/

var person={
	firstName: "Avadhesh",
	lastName: "Yadav",
	fullName: function()
	{
		return this.firstName+" "+this.lastName;
	}
};

alert(person.fullName());