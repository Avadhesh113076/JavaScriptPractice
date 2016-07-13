var foo=[11,"Hello",true];

var value=foo[0];
foo[3]=15;
foo[foo.length]="a new value";
foo.push("Whatever");
//alert(foo);

var names=["bus","apple"],
    name2=["car","dog"];
var people=names.concat(name2);
var joined=people.join("| ");
/*var reversed=people.reverse();
var sorted=people.sort();*/
alert(joined); 
 

 