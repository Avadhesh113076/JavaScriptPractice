(function () {
	
   var divFoo=document.getElementById("foo"),
       style=divFoo.style;
    /*style.color="blue";
    style.border="1px solid black";
    style.backgroundColor="#ffff00";
    style.padding="2px";*/
     
     /*divFoo.className=" css-class css-class2 ";
     //divFoo.className="";
     divFoo.className=divFoo.className.replace(" css-class2 ","");
     //alert(style.color);*/

     /*divFoo.classList.add("css-class");
     divFoo.classList.add("css-class2");*/

     /*divFoo.className=" css-class css-class2 ";
     //divFoo.classList.remove("css-class");
     divFoo.classList.toggle("css-class");
     divFoo.classList.toggle("css-class");*/

      /*divFoo.className=" css-class css-class2 ";
      //var color=window.getComputedStyle(divFoo,null).getPropertyValue("color");
      var color=divFoo.currentStyle["color"];
      alert(color);*/

     divFoo.className=" css-class css-class2 ";
     var getStyle=function(el,cssProperty)
     { 
     	    if(typeof getComputedStyle!=="undefined"){
                 return window.getComputedStyle(el,null).getPropertyValue(cssProperty);
     	    }
     	    else
     	    {
     	    	return el.currentStyle[cssProperty];
     	    }
     };
     var color=getStyle(divFoo,"color");
      alert(color)

}());