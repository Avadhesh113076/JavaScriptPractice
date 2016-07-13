 var doSomething=function(paramOne,paramtwo,fn) {
	paramOne+= 3;
	paramOne+= 1;
	paramOne*= 8;
	return fn(paramOne,paramtwo);
};

function sum(paramOne,paramtwo) {
	return paramOne+paramtwo;
}
var myVariable1=doSomething(2,2,sum);
var myVariable2=doSomething(3,2,function product(paramOne,paramtwo) {
	return paramOne*paramtwo;
});
/*function doSomething(paramOne) {
	paramOne+= 1;
	paramOne+= 2;
	paramOne*= 8;
	return paramOne;
}*/
alert(myVariable1);
alert(myVariable2);

