/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// IMPLEMENT A FUNCTION DECLARATION CALLED 'search' 
 // TAKES A PARAMETER REPRESENTING AN ARRAY OF ANIMALS
 // TAKES A PARAMETER REPRESENTING A STRING
  function search(array, string) {
    // LOOKS THROUGH THE 'animals' ARRAY, 
     // USING FOR LOOP
      for (var i = 0; i <= array.length - 1; i++) {
        // AND RETURNS THE ANIMAL'S OBJECT IF AN ANIMAL WITH THAT NAME EXISTS
         if (array[i].name === string) {
            return array[i];
         }
    }
    
    // RETURNS 'null' IF NO ANIMAL WITH THAT NAME EXISTS
     return null;
  }


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// IMPLEMENT A FUNCTION DECLARATION CALLED 'replace'
 // TAKE 3 PARAMETERS, AN ARRAY OF ANIMALS, A STRING OF THE NAME OF AN ANIMAL AND AN OBJECT THAT REPLACES THE ANIMAL
  function replace(animals, name, replacement) {
    // USING FOR LOOP 
     for (var i = 0; i <= animals.length - 1; i++) {
        // IF AN ANIMAL WITH THAT NAME EXISTS WITHIN THE 'animals' ARRAY
         if (animals[i].name === name) {
            // REPLACE IT'S ENTIRE OBJECT WITH THE REPLACEMENT OBJECT
             animals[i] = replacement;
         }
         // OTHERWISE DO NOTHING
    }
  }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// IMPLEMENT A FUNCTION DECLARATION CALLED 'remove'
 // TAKES 2 PARAMETERS AN ARRAY OF ANIMALS, AND A NAME OF AN ANIMAL
  function remove(array, name) {
    // USING FOR LOOP
     for (var i = 0; i <= array.length - 1; i++) {
      // IF AN ANIMAL WITH THAT NAME EXISTS WITHIN THE 'ANIMALS' ARRAY   
       if (array[i].name === name) {
        // REMOVE IT
         // delete array[i]; => Using delete property does not work
         array.splice(array[i], 1);
       }
      }
  }


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// IMPLEMENT A FUNCTION CALLED 'add'
 // TAKES 2 PARAMETERS, AN ARRAY OF ANIMALS, AND AN OBJECT REPRESENTING A NEW ANIMAL TO BE ADDED
  function add(array, object) {
    // USING FOR LOOP
     for (var i = 0; i <= array.length - 1; i++) {
      // CHECKS THAT THE ANIMAL OBJECT HAS A 'species' and 'name' PROPERTY WITH A LENGTH > 0
      // HAS A UNIQUE NAME, MEANING NO OTHER ANIMALS HAVE THAT NAME
       if (object.name.length > 0 && object.species.length > 0 && object.name !== array[i].name) {
        // ADDS THE NEW OBJECT TO THE ANIMALS ARRAY
         array.push(object);
        } else {
          return array;
        }
     }
  }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
