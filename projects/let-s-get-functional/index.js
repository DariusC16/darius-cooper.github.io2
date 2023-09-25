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
    /*var males = _.filter(array, function(customer) {
        return customers.gender === 'male'
    }).length
    // return males.length => works too
     return males;*/

     // NEW CODE 
     // USE _.REDUCE() TO RETURN THE NUMBER OF MALE CUSTOMERS
     let males = _.reduce(array, function(accumulator, current){ // DETERMINE IF THE CURRENT CUSTOMER IS MALE
      // IF MALE ADD 1 TO ACCUMULATOR
      // ACCUMULATOR = 0 // CURRENT = PROPERTY 
      if (current.gender === 'male') {
          accumulator += 1;
      }
      return accumulator;
   }, 0)
   return males;
      
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
     return females;
}

var oldestCustomer = function(array) {
  // FIND THE OLDEST CUSTOMERS NAME
   // INIT VARIABLE
    var a = array.reduce(function(acc, current) {
      // LOOPING THROUGH ARRAY
       // CURRENT IS FIRST PERSON OBJECT
        // IF CURRENT AGE IS GREATER THAN ACCUMULATOR AGE
         if (current.age > acc.age) {
          // ACCUMULATOR IS ASSIGNED TO CURRENT PERSON OBJECT
           acc = current;
         }
         
         return acc;
    }, {age: 0})

    // RETURNING NAME OF PERSON OBJECT
    return a.name;
}

var youngestCustomer = function(array) {
  // FIND THE YOUNGEST CUSTOMERS NAME
   // INIT VARIABLE
    var young = array[0];
    array.forEach(function(current) {
      // LOOPING THROUGH ARRAY
       // CURRENT IS FIRST PERSON OBJECT
        // IF CURRENT AGE IS LESS THAN ACCUMULATOR AGE
         if (current.age < young.age) {
          // ACCUMULATOR IS ASSIGNED TO CURRENT PERSON OBJECT
           young = current;
         }
         
         return young;
    }, {age: 0})

    // RETURNING NAME OF PERSON OBJECT
    return young.name;
}

var averageBalance = function(array) {
  // FIND THE AVERAGE BALANCE OF ALL CUSTOMERS
   // INIT VARIABLE
    /*var a = array.reduce(function(acc, current) {
      // LOOPING THROUGH ARRAY
       // CURRENT IS THE FIRST PERSON OBJECT
        // SUM UP ALL NUMBERS OF BALANCES INTO ONE, THEN DIVIDE IT BY THE LENGTH OF THE ARRAY
         // USING RUBULAR TO TAKE OUT NON DIGIT CHARACTERS
          var b = current.balance.replace(/\D/g, '')
          // TURNING STRING OF DIGITS INTO A NUMBER
           var c = Number(b);
           console.log(c);
           // RETRUNING ACCUMULATOR PLUS CURRENT
           return acc + c;
    
    }, 0)*/
    
    
    // INIT SUM
     // DIVING TOTAL BY ARRAY LENGTH
      //var sum = a / array.length
    
    //return sum;

    // NEW CODE
    var a = array.reduce(function(acc, current) {
      // LOOPING THROUGH ARRAY
       // INIT VARIABLE
        // USING NUMBER TO TRASNFORM STRING INTO NUMBER
      var balance = Number(current.balance.replace(/\D/g, ''));
      
      // ADDING ACC TO BALANCE
      return acc + balance;
    }, 0);
  
    // Calculate the average balance by dividing the sum by the number of customers
    var average = a / array.length;
  
    return average;

   
};

var firstLetterCount = function(array, letter) {
  // FIND HOW MANY CUSTOMERS NAMES BEGINS WITH A GIVEN LETTER
   // INIT VARIABLE
    var a = array.reduce(function(acc, current) {
      // LOOPING THROUGH ARRAY OF OBJECTS
       // CURRENT IS THE FIRST PERSON OBJECT
        var acc;
        // IF CURRENT NAME BEGINS WITH GIVEN LETTER UPPERCASED OR LOWERCASED
         if (current.name.charAt().toUpperCase() === letter || current.name.charAt().toLowerCase() === letter) {
          // ADD 1 TO ACCUMULATOR
           acc += 1;
         }
         return acc;
    }, 0)

    return a;
};

var friendFirstLetterCount = function(array, customer, letter) {
  // FIND HOW MANY FRIENDS OF A GIVEN CUSTOMER HAVE NAMES THAT START WITH A GIVEN LETTER
  var count = 0;
   // USING FOR LOOP
    for (var i = 0; i < array.length; i++) {
      // IF NAME IS CUSTOMER
       if (array[i].name === customer) {
        // LOOP THROUGH FRIENDS ARRAY IN OBJECT
         for (var j = 0; j < array[i].friends.length; j++) {
          // IF A FRIENDS NAMES STARTS WITH LETTER
           if (array[i].friends[j].name.charAt().toUpperCase() === letter.toUpperCase()) {
             // ADD 1 FOR THE AMOUNT OF FRIENDS THAT START WITH LETTER
              count++
           }
         }
       }
    }
    return count;
};

var friendsCount  = function(array, customer){
  // FIND THE CUSTOMER NAMES THAT HAVE A GIVEN CUSTOMER NAME IN THEIR FRIENDS LIST
   // INIT VARIABLE
    var a = [];
  
    // USING FOR EACH
     array.forEach(function(person) {
      // LOOPING THROUGH ARRAY
       // USING FOR EACH TO LOOP THROUGH THE FRIENDS ARRAY INSIDE OBJECT
        person.friends.forEach(function(friend) {
          // IF FRIENDS NAME IS CUSTOMER
           if (friend.name === customer) {
            // PUSH NAME OF CUSTOMER IN OBJECT TO ARRAY
             a.push(person.name);
        }
      });
    });

    // RETURN ARRAY
    return a;
  };

var topThreeTags  = function(array) {
   // FIND THE MOST COMMON TAGS AMONG ALL THE CUSTOMERS ASSOCIATED TAGS
   // INIT VARIABLE
    var a = {};

  array.forEach(function(customer) {
    // NOW LOOPING THROUGH ARRAY OF OBJECTS
     // LOOP THROUGH THE TAGS ARRAY
      customer.tags.forEach(function(tag) {
        // IF TAG EXISTS IN OBJECT
         if (a[tag]) {
          // INCREMENT THE COUNT
           a[tag]++;
          } else {
            // OTHERWISE START AT 1
             a[tag] = 1;
            }
          });
        });
        
        // TURNING THE OBJECT INTO AN ARRAY OF OBJECTS
         var arrLit = [];
         // USING FOR IN LOOP 
          for (var key in a) {
    arrLit.push({ tag: key, count: a[key] });
  }
  // SORTING ARRAY BY DESCENDING ORDER
   arrLit.sort(function(a, b) {
    return b.count - a.count;
  });
  
  // TAKING THE TOP THREE TAGS
   var topThree = arrLit.slice(0, 3);
  
   // TAKING JUST THE TAG NAMES
    var topThreeTagNames = topThree.map(function(item) {
      return item.tag;
    });

    // FINALLY DONE!!!
    // NEVER AGAIN...
  return topThreeTagNames;
};


 
var genderCount = function(array) {
  // CREATE A SUMMARY OF GENDERS
  var a = array.reduce(function(acc, current) {
    // LOOPING THROUGH ARRAY
     // INIT VARIABLE TO TAKE GENDER IN CURRENT OBJECT
      var gender = current.gender;
      // IF GENDER IS NOT A PROPERTY IN THE ACCUMULATOR OBJECT initialize it to 1
       if (!acc[gender]) {
        // ASSIGN IT TO 1
         acc[gender] = 1;
        } else {
          // IF GENDER IS A PROEPRTY THEN INCREMENT IT
           acc[gender]++;
          }

    return acc;
  }, {});
  // RETURN OBJECT
  return a;
};

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
