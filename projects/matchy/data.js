/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CREATE A VARIABLE NAMED 'animal' AND ASSIGN IT TO AN EMPTY OBJECT
 var animal = {};

 // USING DOT NOTATION GIVE 'animal' A PROPERTY NAMED 'species' WITH A VALUE OF ANY ANIMAL SPECIES
  animal.species = 'Panda';

  // USING BRACKET NOTATION GIVE 'animal' A PROPERTY CALLED 'name' WITH A VALUE OF EMPTY ARRAY
   animal["name"] = 'Po';

   // USING EITHER NOTATION GIVE 'animal' A PROPERTY CALLED 'noises' WITH A VALUE OF EMPTY ARRAY
    animal["noises"] = []

    // PRINT YOUR ANIMAL OBJECT TO THE CONSOLE BY ADDING CONSOLE
     console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CREATE A VARIABLE NAMED 'noises' AND ASSIGN IT TO AN EMPTY ARRAY
 var noises = [];

 // USING BRACKET NOTATION GIVE 'noises' IT'S FIRST ELEMENT
 // A STRING FOR THE SOUND YOUR ANIMAL MAKES
  noises[0] = 'Growling';

  // USING AN ARRAY FUNCTION ADD ANOTHER NOISE AT THE END OF 'noises'
   noises[noises.length] = 'Huff';

   // USE A FUNCTION THAT WILL PLACE AN ELEMENT AT THE BEGINING OF THE ARRAY
   // USING UNSHFIT METHOD
    noises.unshift('Bleat');
    
    // USING BRACKET NOTATION ADD ANOTHER ELEMENT TO THE END OF 'noises'
     noises.push('Bark');

     // CONSOLE LOG THE LENGTH OF 'noises'
      console.log(noises.length);

      // CONSOLE LOG THE LAST ELEMENT IN NOISES WITHOUT HARD CODING THE INDEX
       console.log(noises[noises.length - 1])

       // CONSOLE LOG THE WHOLE ARRAY 
        console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// USING BRACKET NOTATION ASSIGN THE 'noises' PROPERTY ON 'animal' TO OUR NEW 'noises' ARRAY
 animal['noises'] = noises;

 // USING ANY SYNTAX ADD ANOTHER NOISE TO THE 'noises' PROPERTY ON 'animal'
  animal.noises.push('Squeak');

  // CONSOLE LOG 'animal
   console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CREATE A VARIABLE NAMED 'animals' AND ASSIGN IT TO AN EMPTY ARRAY
 var animals = [];

 // PUSH OUR 'animal' THAT WE CREATED TO 'animals'
  animals.push(animal);

  // CONSOLE LOG 'animals'
   console.log(animals);

   // CREATE A VARIABLE CALLED 'duck' AND ASSIGN IT TO THE DATA:
    var duck = {
      species: 'duck',
      name: 'Jerome',
      noises: ['quack', 'honk', 'sneeze', 'woosh']
    };
    
    // PUSH 'duck' TO 'animals'
     animals.push(duck);

     // CONSOLE LOG 'animals'
      console.log(animals);

      // CREATE TWO MORE ANIMAL OBJECTS EACH
       var snake = {
        species: 'Snake',
        name: 'Fang',
        noises: ['Hiss', 'Slittth'],
        friends: ['Monkey']
       };

       var lion = {
        species: 'Lion',
        name: 'Simba',
        noises: ['Roar', 'Meew']
       };

       // ADD EACH ONE TO ANIMALS
        animals.push(snake);
        animals.push(lion);

       // CONSOLE LOG 'animals' AND CONSOLE LOG THE LENGTH OF 'animals'
        console.log(animals.length);
        
   


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CHOOSE A DATA STRUCTURE FOR THIS LIST OF FRIENDS
 // I choose the array. It holds a list on many things, where an object holds a list of something independent.

 // CREATE A VARIABLE CALLED 'friends' AND ASSIGN IT TO THE DATA STRUCTURE THAT YOU CHOOSE
  var friends = [];

  // WRITE A FUNCTION CALLED 'getRandom' THAT TAKES OUR 'animals' ARRAY
   function getRandom(array) {
    // RETURNS A RANDOM 'index' OF THE INPUT ARRAY, USING 'Math.random'
     return Math.floor(Math.random() * array.length);
     }

     // USING A RANDOM INDEX CREATED, GET A RANDOM ANIMAL AND ITS 'name' TO 'FRIENDS'
      // INVOKING ANIMALS AS ARGUMENT 
       var x = getRandom(animals);

       // PUSHING FUNCTION INTO 'friends'
       // X IS THE RANDOM INDEX NUMBER OF ANIMALS
        friends.push(animals[x].name);

        // USING BACKET NOTATION ADD THE 'friends' LIST AS A PROPERTY ALSO NAMED 'friends'
         animals[0]["friends"] = friends;

         // CONSOLE LOG
          console.log(animals);

       

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}