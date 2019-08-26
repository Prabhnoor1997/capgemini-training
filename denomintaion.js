let r=require('readline-sync');
var amount=r.question("Feed in the amount  ");
var notes=0;
var arr=[ 1, 2, 5, 10, 50, 100, 500 ,1000];
var p=7;
function denominator(amount,p,notes)
{
    if(amount==0)
    {
        
        return notes;
    }

    if(amount<arr[p])
    {
        return denominator(amount,p-1,notes)
    }
    if(amount>=arr[p])
    {
        notes++;
         return denominator(amount-arr[p],p,notes)


    }

}

console.log(denominator(amount,p,notes));