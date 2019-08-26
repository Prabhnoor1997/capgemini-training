/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var myArgs = process.argv.slice(2);


while(1)
{
var name=myArgs[3];
//var name=window.prompt("please enter your username here");
if(name.length<=3 || name==null)
{
  console.log("name is too short");
  break;
}
  else
    {
      console.log("'Hello." + name + " How are you?'");
      break;
    }
}
/*
Exception: SyntaxError: unexpected token: '('
@Scratchpad/4:19
*/
/*
Exception: TypeError: name.value is undefined
@Scratchpad/4:12:4
*/
/*
Exception: ReferenceError: cosole is not defined
@Scratchpad/4:18:7
*/
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/7:12
*/
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/7:12
*/
/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/7:16
*/