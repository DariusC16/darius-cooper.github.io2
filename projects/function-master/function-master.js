//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // SHOULD TAKE AN OBJECT AND RETURN ITS VALUES IN ARRAY 
     return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { 
    // INITALIZNG VARIABLE
     var result = "";

     // SHOULD TAKE AN OBJECT AND RETURN ALL ITS KEYS IN A STRING EACH SEPERATED WITH A SPACE
      result = Object.keys(object);

      // USING JOIN METHOD TO TRANSFORM ARRAY OF KEYS INTO STRINGS
       return result.join(" ");      

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // INTIALIZING VARIABLE
     var result = [];
    // SHOULD TAKE AN OBJECT AND RETURN ALL IT'S STRING VALUES IN A STRING EACH SEPERATED WITH A SPACE

    // USING FOR IN LOOP
     for (var key in object) {
      if (typeof object[key] === 'string') {
        result.push(object[key]);
      }
     }
    return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // SHOULD TAKE ONE ARGUMENT AND // RETURN 'array' IF ITS AN ARRAY AND 'object' IF ITS AN OBJECT
     // IF ITS AN ARRAY
      if (Array.isArray(collection)) {
        // RETURN 'array'
         return 'array';
      } // IF ITS AN OBJECT 
      else if (typeof collection === 'object') {
            // RETURN 'object'
             return 'object';
      } else {
        return collection;
      }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // SHOULD TAKE A STRING OF ONE WORD, AND RETURN THE WORD WITH ITS FIRST LETTER CAPITALIZED
     return string.charAt().toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  // SHOULD TAKE A STRING OF WORDS AND RETURN A STRING WITH ALL THE WRDS CAPITALIZED
   // USING SPLIT METHOD TO TURN STRINGS INTO AN ARRAY
    string = string.split(" ");
    
    // USING FOR LOOP
     for (var i = 0; i <= string.length - 1; i++) {
      // ASSIGNING THE LOOP ARRAY OF STRINGS TO BE THE SENTENCE PUT TOGETHER
       string[i] = string[i].charAt().toUpperCase() + string[i].slice(1);
      }
      
      // RETURNING STRING
       return string.join(" ");
      }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  // SHOULD TAKE AN OBJECT WITH A NAME PROPERTY AND RETURN 'Welcome <Name>!' 
   var result = "";
   var test = "";

   // USING FOR IN LOOP
    for (var key in object) {
      // IF NAME PROPERTY VALUE IS THE SAME AS THE KEY VALUES
       if (object.name === object[key]) {
        // TURN FIRST CHARACTER OF A STRING TO UPPERCASE
         result = object[key].charAt().toUpperCase() + object[key].slice(1)
        }
      }
      
      test = 'Welcome' + ' ' + result + '!'

   return test;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  // SHOULD TAKE AN OBJECT WITH A NAME AND SPECIES AND RETURN Name IS A Species
   // INITALIZNG VARIABLES
    var result;
    var key1;
    var key2;

    key1 = object.name.toUpperCase().charAt() + object.name.slice(1);
    key2 = object.species.charAt().toUpperCase() + object.species.slice(1);

    result = key1 + ' ' + 'is a' + ' ' + key2;

    return result;
 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  // SHOULD TAKE AN OBJECT IF THIS OBJECT HAS A NOISES ARRAY RETURN THEM AS A STRING SEPERATED BY A SPACE, IF THERE ARE NO NOISES RETURN THERE ARE NO NOISES
   // IF THIS OBJECT HAS A NOISES ARRAY
    if (Array.isArray(object.noises) && object.noises.length > 0) {
      // RETURN THEM AS A STRING SEPERATED BY A SPACE
       return object.noises.join(' ');
    } else {
      // RETURN THERE ARE NO NOISES 
       return 'there are no noises';
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // SHOULD TAKE A STRING OF WORDS AND A WORD AND RETURN TRUE IF THE WORD IS IN STRING OF WORDS, OTHERWISE RETURN FALSE
     // IF WORD IS IN STRING OF WORDS
      if (string.includes(word)) {
        // RETURN TRUE
         return true;
      } else {
        // OTHERWISE RETURN FALSE
         return false;
      }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
  // SHOULD TAKE A NAME AND AN OBJECT AND ADD THE NAME TO THE OBJECT'S FRIENDS ARRAY THEN RETURN THE OBJECT
   // BEST ADVICE IS TO TAKE THESE LITERALLY
    object.friends.push(name)
     return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  // SHOULD TAKE A NAME AND AN OBJECT AND RETURN TRUE IF NAME IS A FRIEND OF OBJECT AND FALSE OTHERWISE
   // UISNG FOR LOOP TO ACCES ARRAY IN OBJECT
    /* for (var i = 0; i <= object.friends.length; i++) {
      // IF NAME IS A FRIEND OF OBJECT
       if (object.friends[i] === name) {
        // RETURN TRUE
         return true;
       }
    }

    // RETURN FALSE OTHERWISE
     return false; */
     
     // NEW CODE
      // IF FRIENDS IN OBJECT IS AN ARRAY
       if (Array.isArray(object.friends)) {
        // CHECK IF FRIENDS INCLUDES NAME
         return object.friends.includes(name); // => SHOULD GIVE TRUE
       } // RETURN FALSE OTHERWSIE
          else {
            return false;
          } 
          
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  // SHOULD TAKE A NAME AND A LIST OF PEOPLE, AND RETURN A LIST OF ALL THE NAMES THAT NAME IS NOT FRIENDS WITH
   // INIT VARIABLE 
    var a = [] ;
  // USING FOR LOOP 
    for (var i = 0; i <= array.length - 1; i++) {
      // INSIDE THE ARRAY
       // USING IF STATEMENT
        // IF NAME AND FRIENDS IN OBJECT DOESNT HAVE name
        if (array[i].name !== name && !array[i].friends.includes(name)) {
          // PUSH NAME IN OBJECT TO LIST
           a.push(array[i].name);
           //console.log(a + 'Hey there')// return a
        } 
      } 
      //console.log(a);
      return a;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  // SHOULD UPDATE THE PROPERTY KEY ON OBJECT WITH NEW VALUE. IF KEY DOES NOT EXIST ON OBJECT CREATE IT
   // IF KEY DOES NOT EXIST ON OBJECT 
     if (!object[key]) {
      // CREATE IT
       object[key] = value;
      } // IF KEY DOES EXIST ON OBJECT 
         else if (object[key]) {
          // CHANGE VALUE
           object[key] = value
          } else {
            // NOTHING CHANGES
             object;
            }
     
    //object[key] = value; => This works too apparently. 
    
    // RETURN OBJECT
     return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  // SHOULD TAKE AN OBJECT AND AN ARRAY OF STRINGS. SHOULD REMOVE ANY PROPERTIES ON OBJECT THAT ARE LISTED IN ARRAY
   // USING FOR IN LOOP TO ACCESS KEYS IN OBJECT
    for (var key in object) {
      // USING FOR LOOP TO ACCESS STRINGS IN ARRAY
       for (var i = 0; i <= array.length - 1; i++) {
        // USING IF STATEMENT
         // IF KEY IN OBJECT IS LISTED IN THE ARRAY
          if (key == array[i]) {
            // REMOVE PROPERTY
             delete object[key];
            }
          }
        }

        // RETURN OBJECT
         return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  // SHOULD TAKE AN ARRAY AND RETURN AN ARRAY WITH ALL THE DUPLICATES REMOVED
   //INIT VARIABLE
    var arrLit;

    // USING FOR LOOP
     /* for (var i = 0; i <= array.length - 1; i++) {
      // IF ARRAY VALUES REPEAT
       if (array.includes(array[i]).length > 1) {
        // RETURN ARRAY
         return array;
       } */

       // NEW CODE
        arrLit = [...new Set(array)];

        // RETURN ARRAY
        return arrLit;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}