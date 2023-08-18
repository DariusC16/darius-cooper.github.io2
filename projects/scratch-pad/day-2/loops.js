// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // LOOP FORWARD OVER THE ARRAY
   for (var i = 0; i <= array.length - 1; i++) {
    // PRINT ITS VALUE
     console.log(array[i]);
   }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // LOOP FORWARD OVER THE ARRAY
   for (var i = array.length - 1; i >= 0; i--) {
    // PRINT ITS VALUE
     console.log(array[i]);
   }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // RETURN AN ARRAY CONTAINING THE OBJECT KEYS
   return Object.keys(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // LOOP OVER THE OBJECT
   // USING FOR IN LOOP
   for (var key in object) {
    // PRINT IT'S KEYS
     console.log(key);
   }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // RETURN AN ARRAY CONTAINING THE OBJECTS VALUES
   return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // LOOP OVER THE OBJECT AND PRINT ITS VALUES
   // USING FOR IN LOOP
    for (var key in object) {
      // PRINT ITS VALUES
       console.log(object[key]);
    }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // RETURN THE NUMBER OF KEY/VALUE PAIRS STORED
   return Object.keys(object).length    
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // INITIALIZING VARIABLE
   /* var arrLit = [];
   // LOOP OVER THE OBJECT IN REVERSE
    for (var key in object) {
      arrLit.push(object[key]);
    }
      // PRINTS IT'S VALUES IN REVERSE
       // USING REVERSE ARRAY METHOD
       arrLit = arrLit.reverse();
        console.log(arrLit); */

  // ACCESSING OBEJCT VALUES AND USING REVERSE METHOD
   var a = Object.values(object).reverse();
   // USE FOR LOOP TO ACCESS ARRAY
    for (var i = 0; i <= a.length - 1; i++) {
      // PRINTING REVERSE VALUES TO THE CONSOLE
       console.log(a[i]);
      }

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
