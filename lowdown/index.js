'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param { Array or Object } collection: The collection over which to iterate.
 * @param { Function } action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in an input value and returns it unchanged
 * 
 * @param { Value }: Function takes in any value
 * 
 * @returns { Value }: Function returns input value changed
 * 
 */


function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * map: Function takes in a collection and callback function. It returns a new array of the result of
 * invoking the callback on each item in collection.
 * 
 * @param { Array or Object } collection: Function takes in an array or an object
 * @param { Function } func: Function take in an input function to be applied to each value in the collection 
 * @returns { Array } collection: Function returns an array made up of the return values from calling the input function...
 * 
 */

function map(collection, func) {
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
module.exports.map = map;

/**
 * typeof: Function takes in a value. It checks what kind of data type the input value and
 *  returns a string indentifying the data type.
 * 
 * @param { Any Data Type } value: Takes in an input value to identify the data type  
 * @returns { String } value: Returns a string of the data type identified from the value
 * 
 */

function typeOf(value) {
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
module.exports.typeOf = typeOf;

/**
 * indexOf: Function takes an array of elements and a value matching one of the elements. Returns an index number
 * of the array that has the matching value.
 * 
 * @param { Array } array: Takes an array of string values
 * @param { String } value: Takes a string value
 * @returns { Number } array: Function returns an index number of where value is present in the array
 */

function indexOf(array, value) {
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
module.exports.indexOf = indexOf;

/**
 * containts: Takes an array and a value. Returns a boolean value of true or false if array has
 * an element that matches with value.
 * 
 * @param { Array } array: Takes an array of strings and numbers 
 * @param { Value } value: Takes a value that my be present or absent in the array
 * @returns { Boolean } array: Returns true or false after checking inside a new array list
 */

function contains(array, value) {
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
module.exports.contains = contains;

/**
 * unique: Function takes an array of repeating elements inside. Returns a new array of the
 * all elements with none repeating.
 * 
 * @param { Array } array: Takes an array of of reapeating elements
 * @returns { Array } array: Returns a new array of all elements none repeating
 */

function unique(array) {
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
module.exports.unique = unique;

/**
 * filter: Function takes an array and callback function. Returns a new array of numbers that are only even.
 * 
 * @param { Array } array: Takes an array of numbers
 * @param { Function } func: Takes a function deciding if numbers divded by 2 are equal to 0
 * @returns { Array } array: Returns a new list of numbers that are even
 */

function filter(array, func) {
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
module.exports.filter = filter;

/**
 * reject: Function takes an array and callback function. Returns a new array of numbers that are only odd
 * 
 * @param { Array } array: Takes an array of numbers
 * @param { Function } func: Takes a function deciding if numbers divded by 2 are equal to 0 
 * @returns { Array } array: Returns a new array that holds odd numbers
 */

function reject(array, func) {
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
 module.exports.reject = reject;

 /**
  * partition: Function takes an array and a callback function. Returns a nested array of
  * numbers seperating elements that are even and odd.
  * 
  * @param { Array } array: Takes an array of numbers 
  * @param { Function } func: Takes a function checking if numbers in the array are equal to 0
  * @returns { Array } array: Returns a new array of 2 sub arrays that seperate odd and even numbers
  */

 function partition(array, func) {
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
module.exports.partition = partition;

/**
 * map: Function takes a collection of an array/object and callback function. Returns an array of
 * elements or keys that were target.
 * 
 * @param { Array or Object } collection: Takes an array or object to look through  
 * @param { Function } func: Takes a callback function to invoke the elements and keys being targeted
 * @returns { Array } array: Returns an array of elements that passes through a specific condition
 */

function map(collection, func) {
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
module.exports.map = map;

/**
 * pluck: Function takes an array of objects and property. Returns an array of property values
 * targeted in the objects within the array.
 * 
 * @param { Array } array: Takes an array of objects
 * @param { String } property: Takes a string value that could be within the object elements, inside the array
 * @returns { Array } array: Returns an array of the property values that were within the objects
 */

function pluck(array, property) {
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
module.exports.pluck = pluck;

/**
 * every: Function takes a collection of an arry/object and callback function. Returns a 
 * boolean value of true or false.
 * 
 * @param { Array or Object } collection: Takes a collection of an array/object  
 * @param { Function } func: Takes a callback function checking all number elements are equal to 0
 * @returns { Boolean } boolean: Returns a boolean value of true or false if all number elements are equal to 0 or not
 */

function every(collection, func) {
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
module.exports.every = every;

/**
 * some: Function takes a collection of an array/object and callback function. Returns a boolean
 * value of true or false.
 * 
 * @param { Array or Object } collection: Takes a collection of an array/object
 * @param { Function } func: Takes a callback function checking all number elements are equal to 0
 * @returns { Boolean } boolean: Returns a boolean value of true or false if some number elements are equal to 0 or not
 */

function some(collection, func) {
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
module.exports.some = some;

/**
 * reduce: Function takes an array, callback function, and a seed. Returns a single value
 * after iterating through array elements in order.
 * 
 * @param { Array } array: Takes an array of number elements 
 * @param { Function } func: Takes a callback function that adds the current previous sum with the current value
 * @param { Any Data Type } seed: Takes a data type to hold data dependent on the on the target data type 
 * @returns { Number } number: Returns a single number value sum of all number elements
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
module.exports.reduce = reduce;

/**
 * extend: Function takes a object, another object, and more objects
 * 
 * @param { Object } object1: Takes an object of properties and values
 * @param { Object } object2: Takes an object of properties and values 
 * @param { Object } moreObj  Takes more objects of properties and values
 * @returns { Object } object: Returns an object with properties and values taken from others 
 * and copied into one single object
 */

function extend(object1, object2, moreObj) {
  // COPY PROPERTIES FROM OBJECT 2 TO OBJECT 1
   // IF MORE OBJECTS ARE PASSED IN, COPY THE PROPERTIES TO OBJECT 1 AS WELL
    // USING Object.Assign TO COPY VALUES AND PROPERTIES TO FIRST OBJECT
     return Object.assign(object1, object2, moreObj);
}
module.exports.extend = extend;

/**
 * first: Function takes an array and number. Returns the elements corresponding with the position number
 * given starting from the front.
 * 
 * @param { Array } array: Takes an array of elements 
 * @param { Number } number: Takes a number 
 * @returns { String or Array } string/array: Returns elements that are in position of the array starting from the front
 */

function first(array, number) {
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
module.exports.first = first;

/**
 * last: Function takes an array and number. Returns the elements corresponding with the position number
 * given starting from the front.
 * 
 * @param { Array } array: Takes an array of elements
 * @param { Number } number: Takes a number
 * @returns { String or Array } string/array: Returns elements that are in position of the array starting from the back
 */

function last(array, number) {
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
module.exports.last = last;