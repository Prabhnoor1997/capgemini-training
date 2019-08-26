var r=require('readline-sync');
var m=r.question("press to start \n");
var t0=new Date().getTime();

var n=r.question("press to stop \n");

var t1=new Date().getTime();

console.log("the time between is " + (parseInt((t1)-parseInt(t0))/1000) + " seconds ");