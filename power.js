var myArgs = process.argv.slice(2);
var num=myArgs[0];

var n;
function pow(n)
{
if(n==0)
return 1;
var m;
m=2*pow(n-1);
return m;
}

for(var i=0;i<=num;i++)
{

console.log(pow(i));

}
