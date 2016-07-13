(function () {
	
	/*var pElements=document.getElementsByTagName("p");
alert(pElements.length);

var el=document.createElement("p");
document.body.appendChild(el);
alert(pElements.length);*/

  /*var el=document.createElement("p"),
      content=document.createTextNode("<strong>This was dynamically created </strong>");
      el.appendChild(content);
      el.setAttribute("align","center");
      el.id="bar";
      document.body.appendChild(el);*/
      
     /* var doc=document,
	      el=doc.createElement("p"),
	      content=doc.createTextNode("<strong>This was dynamically created </strong>");
	      pFoo=doc.getElementById("foo")
          el.appendChild(content);
          el.id="bar";

         // pFoo.parentNode.appendChild(el);  
         // pFoo.parentNode.insertBefore(el,pFoo);
            pFoo.parentNode.replaceChild(el,pFoo);*/

       /* var doc=document,
	      el=doc.createElement("p"),
	      pFoo=doc.getElementById("foo") 
	      el.innerHTML="<strong>This was dynamically created </strong>";   
          el.id="bar";
          pFoo.parentNode.replaceChild(el,pFoo); 
          //alert(el.innerHTML);

          var html= el.innerHTML;
          html= html+ " <br/> This was too";
          html= html+ " <br/> This was too2";
          html= html+ " <br/> This was too3";
          el.innerHTML= html;*/

          var doc=document,
              pFoo=doc.getElementById("foo");

          var html=pFoo.innerHTML;
              html= html+ " <br/> This was too";
	          html= html+ " <br/> This was too2";
	          html= html+ " <br/> This was too3";
	          //pFoo.innerHTML= html;
	          pFoo.innerHTML="";
               



}());