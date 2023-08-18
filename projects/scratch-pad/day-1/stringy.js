// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // RETURN THE LENGTH OF STRING
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // RETURN A STRING FORCED TO LOWERCASE
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // RETURN A STRING FORCED TO UPPERCASE
    return string.toUpperCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
     // INITIALIZNG VARIABLE TO HOLD DATA
     var strLit = '';
     // ASSIGNING STRING TO VARIABLE
      // USING LOWERCASE METHOD ON THE STRING
      // USING SPLIT METHOD TO TURN STRING INTO AN ARRAY
      // USE JOIN METHOD AFTER TO ADD THE DASH IN BEWTEEN
      strLit = string.toLowerCase().split(' ').join('-');
       // RETURNING NEW VALUE
        return strLit;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
       // IF THE STRING BEGINS WITH THE CHARACTER UPPERCASED OR LOWERCASED
        if (string.charAt().toUpperCase() === char || string.charAt().toLowerCase() === char) {
            // RETURN TRUE
             return true;
         } else {
            // RETURN FALSE OTHERWISE
            return false;
         }
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // IF THE STRING ENDS WITH THE CHARACTER
     // USING A NEW METHOD CALLED substr() TO EXTRACT THE LAST CHARACTER 
     if (string.substr(-1, 1).toUpperCase() === char || string.substr(-1, 1).toLowerCase() === char) {
        // RETURN TRUE
         return true;
     } // RETURN FALSE OTHERWISE 
     else {
        return false;
     }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // RETURN THE STRINGS CONCATENTATED INTO ONE
    return stringOne.concat(stringTwo);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // ARGS IS AN ARRAY OF BOTH PARAMETERS
     // USING JOIN METHOD
      return args.join('');
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // USING IF STATMENT TO COMPARE THE LENGTH OF BOTH STRINGS
     if (stringOne.length > stringTwo.length) {
        // RETURN THE LONGEST OF THE TWO
         return stringOne;
     }
     if (stringTwo.length > stringOne.length) {
        // RETURN THE LONGEST OF THE TWO
         return stringTwo;
     }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
     // IF THE FIRST IS HIGHER IN ALPHABETICAL ORDER THAN THE SECOND
      if (stringOne < stringTwo) {
        // RETURN 1
         return 1;
      } // IF THE SECOND IS HIGHER IN APLHABETICAL ORDER THAN THE FIRST
         else if (stringOne > stringTwo) {
            // RETURN -1
             return -1;
        } // IF THEY'RE EQUAL 
           else {
            // 
             return 0;
         }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
     // IF THE FIRST IS LOWER IN ALPHABETICAL ORDER THAN THE SECOND
     if (stringOne > stringTwo) {
        // RETURN 1
         return 1;
      } // IF THE SECOND IS LOWER IN APLHABETICAL ORDER THAN THE FIRST
         else if (stringOne < stringTwo) {
            // RETURN -1
             return -1;
        } // IF THEY'RE EQUAL 
           else {
            // 
             return 0;
         }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
