// concat()

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];
let array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// syntax
// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, /* … ,*/ valueN)

// return value --- New array

// The concat() method preserves empty slots if any of the source arrays is sparse.

let letter = ["a", "b", "c"];
let numbers = [1, 2, 3];

let alphaNumerics = letter.concat(numbers);
console.log(alphaNumerics);
// results in ['a', 'b', 'c', 1, 2, 3]

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];

let numbers2 = num1.concat(num2, num3);

console.log(numbers2);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

let letters = ["a", "b", "c"];

let alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumerics);
// results in ['a', 'b', 'c', 1, 2, 3]

const number1 = [[1]];
const number2 = [2, [3]];

const num_concat = num1.concat(num2);

console.log(num_concat);
// results in [[1], 2, [3]]

// modify the first element of num1
number1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]


const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]


// **concat does not treat all array-like objects as arrays by default — only 
// if Symbol.isConcatSpreadable is set to a truthy value (e.g. true).

console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

//Calling concat() on non-array objects
// If the this value is not an array, it is converted to an object and then 
// treated in the same way as the arguments for concat().
//  In this case the return value is always a plain new array.
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 };
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]

  
                    


                                    // copyWithin()
                
                                   
//  The copyWithin() method shallow copies part of an array to another
// location in the same array and returns it without modifying its length.

// syntax

copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)

const arr = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(arr.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(arr.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

            
                // ** 
// Negative index counts back from the end of the array — if target < 0, target + array.length is used.
// If target < -array.length, 0 is used.
// If target >= array.length, nothing is copied.

/*
If target is positioned after start after normalization,
 copying only happens until the end of 
 array.length (in other words, copyWithin() never extends the array). 
*/

/*
Negative index counts back from the end of the array — if start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, nothing is copied.
*/

/*
Negative index counts back from the end of the array — if end < 0, end + array.length is used.
If end < -array.length, 0 is used.
If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be copied.
If end is positioned before or at start after normalization, nothing is copied.
*/

// Return - Modified Array with same size.


console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]


console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]

const arrayLikes = {
    length: 5,
    3: 1,
  };
  console.log(Array.prototype.copyWithin.call(arrayLikes, 0, 3));
  // { '0': 1, '3': 1, length: 5 }
  console.log(Array.prototype.copyWithin.call(arrayLikes, 3, 1));
  // { '0': 1, length: 5 }
  // The '3' property is deleted because the copied source is an empty slot

  

                              // filter()

// The filter() method creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array 
// that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

Syntax

// Arrow function
filter((element) => { /* … */ })
filter((element, index) => { /* … */ })
filter((element, index, array) => { /* … */ })

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)
// What is callbackfn :
// A function to execute for each element in the array. 
// It should return a truthy to keep the element in the resulting array,
// and a falsy value otherwise.

// callbackFn is invoked only for array indexes which have assigned values.
//  It is not invoked for empty slots in sparse arrays.



// Inline callback function
filter(function (element) { /* … */ })
filter(function (element, index) { /* … */ })
filter(function (element, index, array) { /* … */ })
filter(function (element, index, array) { /* … */ }, thisArg)


// Return Value - New array of filtered elements

// It's iterative Method


function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


//

const arrr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arrr.filter(filterByID);

console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ", invalidEntries);
// Number of Invalid Entries = 5


//

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']



console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]


const arrayLiked = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
};
console.log(Array.prototype.filter.call(arrayLiked, (x) => x <= "b"));
// [ 'a', 'b' ]




//

let word_array = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = word_array.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
