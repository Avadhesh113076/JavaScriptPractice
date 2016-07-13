/*var foo="hello, window";

var bar=function () {
	var foo="Hello, function";
	alert(window.foo);
};
bar();*/

/*(function(){
  
      var foo="hello, window";

var bar=function () {
	var foo="Hello, function";
	//alert(window.foo);
	alert(foo);
};
bar();

}());*/


(function(){

    if (confirm("Do you want to go to google.com?")) {
    	  alert("We w'll take you there");
    	  var href=location.href;
    	  alert(href);
    	  //location="http://www.google.com";
    }
    else
    {
    	alert("You will stay here...");
    }
	
}());

