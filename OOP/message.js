const fileReaderPackage=require('fs');
var fileReader=fileReaderPackage.readFileSync('message.txt','utf8');

var str=(fileReader);
console.log(str);
str=str.replace( /<<name>>/i , "Parry");
str=str.replace( /<<full name>>/i , "Prabhnoor Singh");
str=str.replace( /91­xxxxxxxxxx/i , "919780033258");
var d = Date(Date.now()); 
  
  // Converting the number of millisecond in date string 
  a = d.toString() 
  
  // Printing the current date                     
  a= "The current date is: " + a.substring(4,15) ; 
  

str=str.replace( "01/01/2016" ,a ) ;
console.log(str);

