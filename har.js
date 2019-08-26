var myArgs = process.argv.slice(2);
var num=myArgs[0];

var n;
function har(n)
{
if(n==1)
return 1;
var m;
m=har(n-1)+1/n;
return m;
}


console.log(har(num));


