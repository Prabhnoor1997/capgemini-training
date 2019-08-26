/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var myArgs = process.argv.slice(2);
while (1) {
  var times = myArgs[0];
  if (times <= 0) {
    alert("Feed me a positive number please");
    continue;
  }
  var heads = 0;
  var tails = 0;
  for (var i = 0; i < times; i++) {
    var num = Math.random(0, 1);
    //console.log();
    if (num < 0.5)
      tails++;
    else
      heads++;

  }
  console.log("The percentage of head is " + 100 * heads / (heads + tails));
  console.log("The percentage of tail is " + 100 * tails / (tails + heads));
  break;
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
Exception: SyntaxError: missing ; after for-loop initializer
@Scratchpad/4:20
*/
/*
Exception: ReferenceError: math is not defined
@Scratchpad/4:22:15
*/
/*
Exception: ReferenceError: head is not defined
@Scratchpad/4:30:15
*/
/*
Exception: SyntaxError: unexpected token: ')'
@Scratchpad/4:31
*/
/*
Exception: SyntaxError: unexpected token: ')'
@Scratchpad/4:31
*/
