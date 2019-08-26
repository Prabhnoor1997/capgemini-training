

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function swap(m,a,b)
{   
    var q=m[a];
    var newString=setCharAt(m,a,m[b]);

    newString=setCharAt(newString,b,q);
    return newString;
}
function insert(s,ins,cindex)
{
    if(cindex==0)
    var s1=s.substr(1,s.length);
    else
    var s1=s.substr(0,cindex)+s.substr(cindex+1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    //console.log(s1);

    if(ins==0)
    var s2=s[cindex]+s1;
    else
    var s2=s1.slice(0,ins)+s[cindex]+s1.slice(ins);
    //console.log(s2);
    return(s2);
}

function rec(m,a,b)
{   
        if(a==b)
        console.log(m);
        else
            {   
                //var s3;
                for(var i=a;i<=b;i++)
                   { 
                    m=swap(m,a,i);
                    rec(m,a+1,b);
                    m=swap(m,a,i);
                   }
            }

}
function perm(m)
{   var set1=new Set();
    var siz=m.length;
    for(var i=0;i<siz;i++)
    {
            for(k=0;k<siz;k++)
            {
                set1.add(insert(m,k,i))


            }


    }

console.log(set1);
}
var r=require('readline-sync');
var mas=r.question("enter the string \n");
var si=mas.length;
rec(mas,0,si-1);
//perm(mas);