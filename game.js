var myArgs = process.argv.slice(2);
var stake=myArgs[0];
var goal=myArgs[1];
var N=myArgs[2];
var loss=0
var win=0;
for(var i=0;i<N;i++)
{
    stake=myArgs[0];
while(1)
{
    if(stake==0)
    {
        loss++;
        break;
    }
    if(stake==goal)
    {
        win++;
        break;
    }
    if(Math.random()<0.5)
        stake--;
    else
        stake++;
}
}
console.log(win);
console.log(loss);