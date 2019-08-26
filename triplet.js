var myArgs = process.argv.slice(2);
var n=myArgs[0];
var size=8;
function generate(m)
    {
        
        for(var i=0;i<size;i++)
            {
                for(var j=i+1;j<8;j++)
                   {
                        for(var k=j+1;k<8;k++)
                        {   
                            
                            var d=parseInt(m[i],0)+parseInt(m[j],0)+parseInt(m[k],0);
                            if(d==0)
                            console.log(m[i],m[j],m[k]);
                            
                            
                            
                        }
                   }
            }
    }

generate(myArgs);