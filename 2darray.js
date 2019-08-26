
function inputarray()
{
var r=require('readline-sync');
var rows=r.question('ENter the no. of rowws u wanna make');
var col=r.question('Enter the no. of cols u wnanna make');
tarray =new Array(rows);
for(var i=0;i<rows;i++)
    {   
        tarray[i] = new Array(col);
        for(var k=0;k<col;k++)
            {
                tarray[i][k]=r.question('fssf');
            }
        

    }
console.log(tarray);
}
inputarray();