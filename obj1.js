var obj="This is a String Object",
    length=obj.length;

/*var index1=obj.indexOf("is");   
var index2=obj.indexOf("is",index1+1); */
var index1=obj.lastIndexOf("is");
var index2=obj.lastIndexOf("is",index1-1);

alert(index1);
alert(index2);

var substr=obj.substr(10,6);
var substring=obj.substring(0,4);
alert(substr);
alert(substring);

var newString=obj.replace("Object","Value");
alert(newString);
alert(obj);