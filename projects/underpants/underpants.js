// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // RETURN THE TYPE OF VALUE AS A STRING
     // IF VALUE IS NULL 
      if (value === null) {
        // RETURN NULL 
         return 'null';
        } // IF VALUE IS STRING
           else if (typeof value === 'string') {
            // RETURN STRING
             return 'string';

            } // IF VALUE IS ARRAY
               else if (Array.isArray(value)) {
                // RETURN ARRAY
                 return 'array';
                } // IF VALUE IS OBJECT
            else if (typeof value === 'object') {
                // RETURN OBJECT
                 return 'object';
            } // IF VALUE IS UNDEFINED
               else if (typeof value === 'undefined') {
                // RETURN UNDEFINED
                 return 'undefined';
               } // IF VALUE IS NUMBER
                  else if (typeof value === 'number') {
                    // RETURN NUMBER
                     return 'number';
                  } // IF VALUE IS BOOLEAN
                     else if (typeof value === 'boolean') {
                        // RETURN BOOLEAN
                         return 'boolean';
                     }  else {
                            return 'function';
                        } 
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a" // Done
*   _.first(["a", "b", "c"], 1) -> "a" // Done
*   _.first(["a", "b", "c"], 2) -> ["a", "b"] // Issue is here
*/
_.first = function (array, number) {
    // IF ARRAY IS NOT AN ARRAY AND NUMBER IS NEGATIVE
     if (!Array.isArray(array) || number < 0) {
        // RETURN []
         return [];
     } // IF NUMBER IS NOT GIVEN OR NOT A NUMBER
        else if (number === null || isNaN(number)) {
        // RETURN JUST THE FIRST ELEMENT IN ARRAY
         return array[0];
      } // IF NUMBER IS GREATER THAN ARRAY.LENGTH
         else if (number > array.length) {
            // RETURN WHOLE ARRAY
             return array;
         } // OTHERWISE RETURN THE FIRST NUMBER ITEMS OF ARRAY
            else {
            let a = [];
            for (var i = 0; i < number; i++) {
                a.push(array[i]);
            }
            return a; 
         }
}
//console.log(_.first(['a', 'b', 'c'], 2));

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) {
    // IF ARRAY IS NOT AN ARRAY AND NUMBER IS NEGATIVE
     if (!Array.isArray(array) || number < 0) {
        // RETURN []
         return [];
     } // IF NUMBER IS NOT GIVEN OR NOT A NUMBER
        else if (!number === null || isNaN(number)) {
        // RETURN JUST THE LAST ELEMENT IN ARRAY
         return array[array.length - 1];
      } // IF NUMBER IS GREATER THAN ARRAY.LENGTH
         else if (number > array.length) {
            // RETURN WHOLE ARRAY
             return array;
         } // OTHERWISE RETURN THE LAST NUMBER ITEMS OF ARRAY
            else {
            let a = [];
            for (var i = 1; i <= number; i++) {
                a.push(array[i]);
            }
            return a; 
         }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // RETURN THE INDEX OF ARRAY THAT IS THE FIRST OCCURRANCE OF VALUE
     // USING FOR LOOP TO ITERATE THROUGH ARRAY
      for(var i = 0; i <= array.length - 1; i++) {
        // IF THE INDEX OF ARRAY IS VALUE
         if (array[i] === value) {
            // RETURN INDEX OF ARRAY
             return i;
         }
        } // IF VALUE IS NOT IN ARRAY
           return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value) {
    // INIT VARIABLLE
     var a = [];
    
    // USING FOR LOOP TO ACCESS ARRAY
     for (var i = 0; i <= array.length - 1; i++) {
        // USING TERNARY OPERATOR
         // IF ARRAY CONTAINS VALUE // RETURN TRUE // RETURN FALSE OTHERWISE
          if (array[i] === value) {
            // PUSH INTO ARRAY
             a.push(array[i]);
          } 
        }  
     
     // RETURN IF ARRAY ELEMENT IS TRUE OR FALSE
      return (a[0] === value) ? true : false;

}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
 
_.each = function(collection, func) {
    // IF COLLECTION IS AN ARRAY
     if (Array.isArray(collection)) {
        // USING FOR LOOP FOR ACCESS ARRAY COLLECTION
         for (var i = 0; i <= collection.length - 1; i++) {
        // CALL FUNCTION ONCE FOR EACH ARGUMENT
         // THE ELEMENT, IT'S INDEX, AND COLLECTION
          func(collection[i], i, collection);
        }
     } // IF COLLECTION IS AN OBJECT
        else {
            // USING FOR IN LOOP FOR POSSIBLE OBJECT
             for (var key in collection) {
            // CALL FUNCTION ONCE FOR EACH PROPERTY
             // THE PROPERTY'S VALUE, IT'S KEY, AND COLLECTION
              func(collection[key], key, collection);
            }
        }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // RETURN A NEW ARRAY OF ALL ELEMENT FROM ARRAY WITH DUPLICATES REMOVED
     // INIT VARIABLE
      var output = [];

      // USING FOR LOOP TO ACCES ARRAY
       for (var i = 0; i <= array.length - 1; i++) {
        // IF OUTPUT DOESN'T INCLUDE ARRAY ELEMENTS
         if (!output.includes(array[i])) {
            // PUSH ELEMENTS INTO OUTPUT
            output.push(array[i]);
         }
       }
       // RETURN A NEW ARRAY OF ELEMENTS
        return output;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    // INIT VARIABLE
     var a = [];
    // LOOPING THROUGH ARRAY
     for (var i = 0; i <= array.length - 1; i++) {
    // CALL FUNCTION FOR EACH ELEMENT IN ARRAY PASSING THE ARGUMENTS
     // THE ELEMENT. IT'S INDEX, AND ARRAY
      if (func(array[i], i, array)) {
        // PUSHING ELEMENTS INTO NEW ARRAY
         a.push(array[i]);
        }
    }
    // RETURN A NEW ARRAY OF ELEMENTS
     return a;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

 _.reject = function(array, func) {
    // INIT VARIABLE
     var a = [];

     // LOOPING THROUGH ARRAY
      for (var i = 0; i <= array.length - 1; i++) {
        // CALL FUNCTION FOR EACH ELEMENT IN ARRAY 
         // THE ELEMENT, IT'S INDEX, AND ARRAY
          if (!func(array[i], i, array)) {
            // PUSHING ELEMENTS INTO NEW ARRAY
             a.push(array[i]);
        }
     }

     // RETURN A NEW ARRAY OF ELEMENTS
      return a;
 }

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    // INIT VARIABLES
     var a = []; // FOR FIRST SUB ARRAY
     var b = []; // FOR SECOND SUB ARRAY
     var output = [] // FOR FULL ARRAY

     // LOOPING THROUGH ARRAY
      for (let i = 0; i <= array.length - 1; i++) {
        // CALL FUCNTION FOR EACH ELEMENT IN ARRAY
         // ELEMENT, KEY, ARRAY
          if (func(array[i], i, array)) {
            // RETURN AN ARRAY THAT IS MADE UP OF 2 SUB ARRAYS
             // 0. FUNCTION RETURNED SOMETHING TRUTHY
             a.push(array[i]);
          } else {
            // 1. FUNCTION RETURNED SOMETHING FALSY
             b.push(array[i]);
          }
      }
      // PUSHING ARRAYS INTO OUTPUT
       output.push(a);
       output.push(b);
       
       // RETURN A NEW ARRAY OF ARRAYS
        return output;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
 
_.map = function(collection, func) {
    // INITALIZING VARAIBLE
     var output = [];
     
     // IF COLLECTION IS AN ARRAY
      if(Array.isArray(collection)){
        // LOOPING THROUGH ARRAY
         for (var i = 0; i < collection.length; i++) {
            // CALL FUNCTION FOR EACH ELEMENT IN COLLECTION
             // THE ELEMENT, IT'S INDEX, AND COLLECTION
              // PUSHING INTO OUTPUT
               output.push(func(collection[i], i, collection));
            }
        } // IF COLLECTION IS AN OBJECT
           else {
            // USING FOR IN LOOP
             for (var key in collection) {
                // CALL FUNCTION FOR EACH KEY IN COLLECTION
                 // THE VALUE, IT'S KEY, AND COLLECTION
                  // PUSHING INTO OUTPUT
                   output.push(func(collection[key], key, collection));
             }
           }

           // RETURN THE NEW ARRAY
            return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    // INIT VARIABLE
    /* var a = [];
     // RETURN AN ARRAY CONTAINING THE VALUE OF PROPERTY
      // USING FOR LOOP TO ACCESS ARRAY
       for (var i = 0; i <= array.length - 1; i++) {
        // USING IF STATEMENT
         // IF ARRAY ELEMENTS HAVE A PROPERTY THAT IS PROPERTY
         if (array[i][property]) {
            // PUSH PROPERTIES INTO ARRAY
             a.push(array[i][property]);
        } else {
            // RETURN ARRAY
             return array;
        }
      }
      
      return a; */ // => This code works as well

      // NEW CODE: USING MAP METHOD
       // INIT VARIABLE
        var b = array.map(function(item) {
            // NOW LOOPING THROUGH THE ARRAY
             // TAGETTING THE VALUES IN THE OBJECT
              return item[property];
        })

        return b;
     
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
     // IF COLLECTION IS AN ARRAY
      if (Array.isArray(collection)) {
        // IF FUNCTION ISN'T PROVIDED
         if (func === undefined) {
            // LOOPING THROUGH ARRAY
             for (var i = 0; i <= collection.length - 1; i++) {
                // IF EVERY ELEMENT IS TRUE 
                 if (!collection[i]) {
                    // RETURN TRUE
                     return false;
                 } else {
                    // RETURN FALSE OTHERWISE
                     return true;
                 }
             }
         } else {
           // IF FUNCTION IS PROVIDED 
            // LOOPING THROUGH ARRAY
             for (var i = 0; i <= collection.length - 1; i++) {
                // CALL FUNCTION FOR EVERY ELEMENT OF COLLECTION WITH THE PARAMETERS
                 // CURRENT ELEMENT, IT'S INDEX, AND COLLECTION
                  // IF STATEMENT
                   if (!func(collection[i], i, collection)) {
                    // RETURN TRUE
                     return false;
                    }
                }
            }
        
        } // IF COLLECTION IS OBJECT
           else {
            // IF FUNCTION ISN'T PROVIDED
             if (func === undefined) {
                // LOOPING THROUGH OBJECT 
                 for (var key in collection) {
                    // IF EVERY KEY IS TRUE
                     if (!collection[key]) {
                        // RETURN TRUE
                         return false;
                     } else {
                        // RETURN FALSE OTHERWISE
                         return true;
                     }
                 }
             } else {
                // IF FUNCTION IS PROVIDED
                 // LOOPING THROUGH OBJECT
                  for (var key in collection) {
                    // CURRENT VALUE, CURRENT KEY, COLLECTION
                     // IF STATEMENT
                      if (!func(collection[key], key, collection)) {
                        // RETURN TRUE
                         return false;
                        }
                    }
                }
            }

            // RETURN FALSE OTEHRWSIE
             return true;

             /* I had to swith all my true and false placements, as I only had
              1 test that wasn't passing before I did so. It was the
               "Should return false when all iterations are not true." */

}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
   // IF COLLECTION IS AN ARRAY
    if (Array.isArray(collection)) {
        // IF FUNCTION ISN'T PROVIDED
         if (func === undefined) {
            // LOOPING THROUGH ARRAY
             for (var i = 0; i <= collection.length - 1; i++) {
                // IF EVERY ELEMENT IS TRUE 
                 if (collection[i]) {
                    // RETURN TRUE
                     return true;
                 } else {
                    // RETURN FALSE OTHERWISE
                     return false;
                 }
             }
         } else {
           // IF FUNCTION IS PROVIDED 
            // LOOPING THROUGH ARRAY
             for (var i = 0; i <= collection.length - 1; i++) {
                // CALL FUNCTION FOR EVERY ELEMENT OF COLLECTION WITH THE PARAMETERS
                 // CURRENT ELEMENT, IT'S INDEX, AND COLLECTION
                  // IF STATEMENT
                   if (func(collection[i], i, collection)) {
                    // RETURN TRUE
                     return true;
                    }
                }
            }
        
        } // IF COLLECTION IS OBJECT
           else {
            // IF FUNCTION ISN'T PROVIDED
             if (func === undefined) {
                // LOOPING THROUGH OBJECT 
                 for (var key in collection) {
                    // IF EVERY KEY IS TRUE
                     if (collection[key]) {
                        // RETURN TRUE
                         return true;
                     } else {
                        // RETURN FALSE OTHERWISE
                         return false;
                     }
                 }
             } else {
                // IF FUNCTION IS PROVIDED
                 // LOOPING THROUGH OBJECT
                  for (var key in collection) {
                    // CURRENT VALUE, CURRENT KEY, COLLECTION
                     // IF STATEMENT
                      if (func(collection[key], key, collection)) {
                        // RETURN TRUE
                         return true;
                        }
                    }
                }
            }

            // RETURN FALSE OTEHRWSIE
             return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed) {
    let result;
    // DETERMINE IF SEED WAS NOT PASSED IN 
    if (seed === undefined) {
        result = array[0]; // ASSIGN THE FIRST ELEMENT/VALUE 
        // LOOPING THROUGH ARRAY
        for (var i = 1; i <= array.length - 1; i++) {
            // ASSIGNING RESULT TO THE INVOKED CALLED BACK FUNCTION
             // USING THE FIRST ELEMENT/VALUE OF COLLECTION AS SEED 
              result = func(result, array[i], i, array);
            }
        } else { // ELSE THERE IS A SEED VALUE
                  result = seed;
                    // LOOPING THROUGH ARRAY
                     for (var i = 0; i <= array.length - 1; i++) {
                        // CALL FUNCTION ON EACH ELEMENT PASSING IN PREVIOUS RESULT,  CURRENT ELEMENT, INDEX
                         result = func(result, array[i], i, array);
        }
    }
    return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, object2, moreObj) {
    // COPY PROPERTIES FROM OBJECT 2 TO OBJECT 1
     // IF MORE OBJECTS ARE PASSED IN, COPY THE PROPERTIES TO OBJECT 1 AS WELL
      // USING Object.Assign TO COPY VALUES AND PROPERTIES TO FIRST OBJECT
       return Object.assign(object1, object2, moreObj);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
