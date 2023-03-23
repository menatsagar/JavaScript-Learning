1..toString(); // "1"
.1.toString(); // "0.1"


// 1.toString();  this will give error  -- Syntax Error: Invalid or unexpected token

// The reason is, ECMAScript numbers are based on the floating point IEEE 754 format, which means:


// 1
// 1 === 1.0; // true
// The fractional part can be omitted, and due to JS parsing grammar, 
// the dot followed immediately after a number is considered the
//  fractional part delimiter:
	
.1 === 0.1; // true
// so 
// this can be understood better by following code:
.1.toString(); // "0.1"
1.5.toString(); // "1.5"


// Takeaway for this:

(1).toString();   // "1"
 
const RATIO = 1;
RATIO.toString(); // "1"

// below two lines of code is even more wierd
1['toString']();  // "1"
 
1.['toString'](); // "1"


const data = [1, 2, 3];
 
// data.0;   // error, not a valid identifier
 
data[0];     // 1
data['0'];   // 1
 
const k = 0; 
 
data.k;      // undefined, "k" name doesn't exist
data[k];     // 1, OK dynamic access


1[(() => 'toString')()]();  // "1"
