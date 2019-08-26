/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
while(1)
{
var name=prompt("please enter your username here");
if(name.length<=3)
{
  alert("name is too short");
}
  else
    {
      alert("your name is " + name);
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