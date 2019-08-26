var myArgs = process.argv.slice(2);
var n=myArgs[0];
var m=myArgs[1];

function euclid(n,m)
{
    return(Math.sqrt(n*n+m*m));

}

console.log(euclid(n,m) );