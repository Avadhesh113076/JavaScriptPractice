var globalVar="This is global Variable";
var globalFunction=function(paramOne) {
	var localVar="This is a local Variable";
	var localFunction=function()
	{
         var superLocalVar="Hello,World!";
         alert(superLocalVar);
         alert(localVar);
         alert(paramOne);
         alert(globalVar);
	};
	localFunction();
}
globalFunction(2);
