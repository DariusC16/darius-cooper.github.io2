// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION WHETHER A GIVEN VALUE
     return function (value) {
        // IS GREATER THAN THE BASE
         if (value > base) {
            return true;
         } else {
            return false;
         }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
     // RETURN A FUNCTION WHETHER A GIVEN VALUE
     return function (value) {
        // IS LESS THAN THE BASE
         if (value < base) {
            return true;
         } else {
            return false;
         }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION THAT TEST WHETHER A GIVEN STRING
     return function (string) {
        // STARTS WITH THE startsWith Character
         if (string.charAt().toLowerCase() === startsWith) {
            return true;
         } else if (string.charAt().toUpperCase() === startsWith) {
            return true;
         } else {
            return false;
         }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // RETURN A FUNCTION WHETHER A GIVEN STRING
     return function (string) {
        // ENDS WITH THE endsWith CHARACTER
              // charAt method taking the last character
         if (string.charAt(string.length - 1).toUpperCase() === endsWith) {
            return true; 
         } else if (string.charAt(string.length - 1).toLowerCase() === endsWith) {
            return true;
         } else {
            return false;
         }
     }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // INITALIZING VARIABLE
     var arrLit = [];
    // RETURN THE ARRAY OF STRINGS MODIFIED
     // USING FOR LOOP
      for (var i = 0; i <= strings.length - 1; i++) {
         // PASS EACH STRING INTO THE MODIFIED
          arrLit.push(modify(strings[i]))
      }
    
    return arrLit;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // USING FOR LOOP
     for (var i = 0; i <= strings.length - 1; i++) {
      // IF ALL STRINGS PASS THE TEST
       if (!test(strings[i])) {
         // RETURN TRUE
         // Test says expected true to be false
          return false;
       }
   }
   return true;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
