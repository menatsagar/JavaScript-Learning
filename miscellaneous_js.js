var x='d'-+'d'; //x = NaN
var y  = 'd'+-+'d'; // y = dNaN  

2 == [2] // true
//"== operator in JS performs type coercion which means it tries to
// convert the values being compared to a common data type before making the comparison."

'123' == 123        // true
'123' == 123        // false

'foo' == NaN        // false

undefined == null   // true
undefined === null   // false 

NaN === NaN         // false
NaN == NaN          // false

0 == null           // false

console.log([] == ![]);     // true
console.log([] === ![]);    //false

// Comparing an empty array [] with a boolean value created by negating (using the ! operator) a non empty array []. 
// The result of this comparison is true, which might seem unexpected at first glance..

// In JS, every value can be either true or false in a boolean context.
//  An empty array is a truthy value, which means it's considered true 
// in a boolean context. When we apply the ! operator to it, it's converted to false.

// On the other side, the boolean value created by negating a non empty array is false.
//  When we compare an empty array (truthy) with a false value (falsy) using the == operator, 
// JS performs type constraint which means it tries to convert the values to a common type before comparing them.
//  So, the empty array is converted to false which results in both sides being false. At the end, the comparison returns true.

['a', 'b'] !== ['a', 'b']   // true
['a', 'b'] == ['a', 'b']    // false
[1, 2] + [3, 4]             // "1,23,4" 

null == undefined // true
null === undefined // false

typeof NaN   // number
typeof null  // object

// NaN stands for Not a Number and is a special value in JS that 
// represents an undefined or unrepresentable numerical value.

// When you use typeof with NaN, it will return number. This might seem strange but 
// it's because NaN is technically a numeric data type in JS even though
//  it represents something that isn't actually a number.

// When typeof is applied to null, it returns the string object. 
// This is because null is considered to be a special value that represents an empty object reference. 
// null is not an object itself but rather a primitive value. 
// This is considered to be a quirk or oddity in the language design of JS.

typeof function(){}     // "function"
null instanceof Object  // false

true=='true'  // false

1 + true      // 2
1 - true      // 0

'' == false   // true
'' === false   // false

0 == false    // true
0 === false    // false

true + false  // 1

"1" + 1    // "11"
2 + "2"    // "22"
"5" - 3    // 2

+"1"                  // 1
-"1"                  // -1

+true                 // 1
-true                 // -1

+false                // 0
-false                // -0

+null                 // 0
+undefined            // NaN

1 / "2"               // 0.5
"2" / 1               // 2

1 / 0                 // Infinity
-1 / 0                // -Infinity

3 * "abc"             // NaN

true > false          // true  

undefined + 1         // NaN
undefined - 1         // NaN
undefined - undefined // NaN
undefined + undefined // NaN

null + 1              // 1
null - 1              // -1
null - null           // 0
null + null           // 0

Infinity + 1          // Infinity
Infinity - 1          // Infinity
Infinity - Infinity   // NaN
Infinity + Infinity   // Infinity
Infinity / Infinity   // NaN

"b" + "a" + + "a" + "a" // "baNaNa"
// It concatenates the string b, the string a, the string resulting from the expression +"a" and the string a.

// +"a" force the string a into a number which evaluates to NaN (Not a Number) because a is not a valid number.

// When we concatenate b, a, NaN (represented as an empty string) and a, we get the string baNaNa.


!{}       // false
console.log({} == !{});    // false
console.log({} == {});     // false

// When, we are comparing an empty object {} to a negated empty object !{}.
//  The exclamation mark ! is a logical operator that negates the value of the object
//  so !{} returns false since an object is considered truthy in JS. We are actually comparing {} to 
// false which results in a false value since they are not equal in value or data type.

// In the last expression, we are comparing two empty objects {}. 
// Despite the fact that they may appear to be identical, they are two separate objects with 
// distinct references in memory so they are not equal in value or data type. In the end the comparison also results in a false value.

// When you use the plus operator + between two objects wrapped in curly braces {}, it tries to concatenate the objects as strings.


7 > 6 > 5 // false

// First, 7 > 6 evaluates to true because 7 is greater than 6.
// Next, true > 5 is evaluated. In JS, true is force into the number 1 and 
// false is force into 0. So 1 > 5 is false, since 1 is not greater than 5.

// So at the end, 7 > 6 > 5 is equivalent to true > 5 which is false.

5 < 6 < 7  // true
0 > null   // false

Math.max() // -Infinity
Math.min() // Infinity

parseInt('08')       // 8
parseInt('08', 10)   // 8 
parseInt('0x10')     // 16 

parseFloat('3.14.15')  // 3.14 
parseFloat('0.0')      // 0 

(function(x) { delete x; return x; })(1);   // 1

// An anonymous function that takes an argument x. Inside the function
//  it tries to delete the x variable which is not possible because x is a
//   function argument and cannot be deleted. The function then returns the value of x.

// When this function is called with the argument 1, the value of x inside the function is set to 1. In this case, the delete
//  operation has no effect, the function simply returns the value of x which is 1

for (var i = 0; i < 3; ++i) {
    setTimeout(() => console.log(i), 1000); // returns 3 three times
  }
  
  for (let i = 0; i < 3; ++i) {
    setTimeout(() => console.log(i), 1000); // returns 0 1 2
  }

//   This is because var creates a single binding at the function scope, so after a one-second 
//   timeout the loop has already run its course, hence you get 3 three times. By using let you
//    bind the variable at the block scope (loop), so it returns the values you 
//    expected since i refers to the value at that loop iteration.