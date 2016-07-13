(function () {
   
   /*var i=0;
   var doSomething=function(){
   	  console.log("doSomething executed "+(i+1)+" Times");
   	  i=i+1;
   	  if (i>10) {
   	  	//setTimeout(doSomething,500);
   	  	clearInterval(timer);
   	  }
      

   }
     
     /* var timer=setTimeout(doSomething,500);
      clearTimeout(timer);*/
       
      //var timer=setInterval(doSomething,500);
      //alert("Hello");*/

      /*var speed=10,
          movBox=function(){
              var el=document.getElementById("box"),
                  left=el.offsetLeft,
                  moveBy=3;
                  el.style.left=left + moveBy + "px";
                  if (left>400) {
                  	clearTimeout(timer);
                  }
          };
          var timer=setInterval(movBox,speed);*/

          var speed=10,
          movBox=function(moveBy){
              var el=document.getElementById("box"),
                  left=el.offsetLeft;
                  
                  if ((moveBy>0 && left>399) || (moveBy<0 && left<51)) {
                  	clearTimeout(timer);
                  	 timer=setInterval(function(){
			          	movBox(moveBy*-1);
			          },speed);

                  }
                  el.style.left=left + moveBy + "px";
                  
          };
          var timer=setInterval(function(){
          	movBox(3);
          },speed);
}());