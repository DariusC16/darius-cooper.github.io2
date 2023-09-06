// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./darius-cooper.github.io2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer) {
        return customers.gender === 'male'
    }).length
    // return males.length => works too
};

var femaleCount = function(array) {
    // USE _.REDUCE() TO RETURN THE NUMBER OF FEMALE CUSTOMERS
     let females = _.reduce(array, function(accumulator, current){ // DETERMINE IF THE CURRENT CUSTOMER IS FEMALE
        // IF FEMALE ADD 1 TO ACCUMULATOR
        // ACCUMULATOR = 0 // CURRENT = PROPERTY 
        if (current.gender === 'female') {
            accumulator += 1;
        }
        return accumulator;
     }, 0)
}

var oldestCustomer;

var youngestCustomer = function(array) {
var youngest = _.reduce(array, function(accumulator,current){
    //similar to oldest
    if(current.age < accumulator.age) {
        accumulator = current;
    }
    return accumulator;
})
//return string
return youngest.name;
}

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
