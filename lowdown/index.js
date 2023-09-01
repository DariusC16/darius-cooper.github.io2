'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
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

/**
 * map: Function does....
 * 
 * @param { Array or Object } collection: Function takes in an array or an object
 * @param { Function } func: Function take in an input function to be applied to each value in the collection 
 * @returns { Array } collection: Function returns an array made up of the return values from calling the input function...
 * 
 */