module.exports = 

class util
{
    anagram(m,n)
    {   
        try
        {
            if(typeof m!="string" || typeof n!="string")
            throw "The input must be a string";
            if(m=="" || n=="" )
            throw "The string should contain something";
        }
        catch(err)
        {   
            console.log(err);
            return(err);
        }
        var found=0;
        var not_found=0;
        var len=m.length;
        if(m.size==n.size)
        {
        for(var i=0; i<len;i++)
                {
                    found = 0;
                    for(var j=0; j<len; j++)
                    {
                        if(m[i] == n[j])
                        {
                            found = 1;
                            break;
                        }
                    }
                    if(found == 0)
                    {
                        not_found = 1;
                        break;
                    }
                }
                if(not_found == 1)
                {
                    console.log("Strings are not Anagram to Each Other..!!");
                    return("FALSE");
                }
                else
                {
                    console.log("Strings are Anagram");
                    return("TRUE");
                }
        }
        else
        console.log("words must be of same length for them to be anagrams");
    }
    
    
    inputarray()
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
    
    temperatureconversion(m,type)
    {
        if(type==1)
        {
            console.log((m*9/5) + 32 + "°F");
        }
        if(type==2)
        {
            console.log((m-32)*5/9 + "°C");
        }
    }
    
    reverseStr(str)
        {
        let newStr = ""
        for (let i = str.length-1; i >= 0; i--){
          newStr += str[i]
         }
         return newStr
      }

    binary(n)
    {
       var s="";
       while(1)
       {
            if(n==0)
            break;
            if(n%2==0)
            s=s+"0";
            else
            s=s+"1"; 
            n=Math.floor(n/2);
       }
      
       
    
       console.log(this.reverseStr(s));
       return(this.reverseStr(s));
    }
 interest(p,y,r)
 {
    r=r/1200;
    var n=12*y;
    var ans=(p*r)/(1-Math.pow((1-(1+r)),n));
    console.log(ans);

 }

 sqrt(n)
 {
    
    var epsilon = Math.pow(10,-15);
    console.log(epsilon);
    var t=n;
    while(1)
    {
    
    if(Math.abs(t-n/t) < epsilon*t)
    break;
    t=(t+n/t)/2;
   
    }
    console.log(t);

 }
 nibble(n)
 {
    var s=this.binary(n);
    var n=s.length;
    //console.log(n);
    n=8-(n%8);
    if(n!=8)
    {for(var i=0;i<n;i++)
        {
            s="0"+s;
            
        }
        
    }
    //console.log(s);
    var snew="";
    for(var i=0;i<s.length/8;i++)
    {
        for(var k=0;k<4;k++)
            {
            
            snew=snew+s[8*i+(k+4)];    
            
            }
            for(var k=0;k<4;k++)
            {
            
            snew=snew+s[8*i+(k)];    
            
            }
            
    }
    var ans= parseInt( snew, 2 );
    console.log(ans); 
    var singleone=0;
    for(var i=0;i<snew.length;i++)
    {
        if(s[i]=='1')
        {
            singleone++;
        }
    }
    if(singleone==1)
    console.log("the number is a power of 2");
    else
    console.log("the number is not a power of 2");

 }
 
    
 
}







