var myArgs = process.argv.slice(2);
var num=myArgs[0];
var set1 = new Set(); 
var c=0; 
var check;

var n;
function primefactors(n)
{
	var m=Math.sqrt(n);
	for(var i=2;i<m;i++)
		{
			while(n%i==0)
				{
					set1.add(i);
					n=n/i;
				}
		
		}
if(n!=1)
set1.add(n);
console.log(set1);
}

primefactors(num);











