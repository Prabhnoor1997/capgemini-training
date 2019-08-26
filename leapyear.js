/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var myArgs = process.argv.slice(2);
var year=myArgs[0];
while(1)
{

if(year<1000 || year>9999)
  {
    console.log("feed me a 4 digit year please");
    continue;
  }
if(year%4==0)
  {
    if(year%100==0 && (year/100)%4!=0 )
      {
        console.log("not a leap year");
        break;
      }
      console.log("it a leap year")
    break;
    
    
  }
}
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/7:19
*/
