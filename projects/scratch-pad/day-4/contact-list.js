// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // CREATING OBJECT TO BE RETURNED 
     var contact = {};
     // ADDING PROPERTIES TO OBJECT
      contact["id"] = id;
      contact["nameFirst"] = nameFirst;
      contact["nameLast"] = nameLast;
      // RETURNS A CONTACT OBJECT TO BE ADDED TO THE LIST
       return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        addContact: function(contact){
            contacts.push(contact)
        },
        // 3. TAKES A FULL-NAME STRING AND RETURNS THE CONTACT OBJECT IF FOUND IN THE CONTACTS LIST, OR, UNDEFINED IF THE fullName DOES NOT MATCH ANY CONTACTS IN THE LIST
         findContact(fullName) {
            // USING FOR LOOP TO ACCESS ARRAY OF OBJECTS
             for (var i = 0; i <= contacts.length - 1; i++) {
                // IF FULLNAME IS FOUND IN THE CONTACTS LIST
                 if (contacts[i]["nameFirst"] + ' ' + contacts[i]["nameLast"] === fullName) {
                    // RETURN THE CONTACT OBJECT
                     return contacts[i];
                 } else {
                    // OR UNDEFINED IF THE FULLNAME DOES NOT MATCH ANY CONTACTS 
                    return undefined;
                 }
             }
         }, 
         // 4. TAKES A CONTACT OBJECT TO BE REMOVED FROM THE CONTACTS LIST
          removeContact(contact) {
            // USING SPLICE METHOD
             return contacts.splice(contact, 1);
          },
          printAllContactNames() {
            // SHOULD RETURN A STRING FORMATED WITH ALL THE FULLNAMES OF THEM SEPERATED WITH A LINE BREAK
            // INITIALIZING VARAIBLE
             var arrLit = [];

             // USING FOR LOOP
              for (var i = 0; i <= contacts.length - 1; i++) {
                arrLit.push(contacts[i]["nameFirst"] + ' ' + contacts[i]["nameLast"])
              }
              // RETURN THEM SEPERATED WITH A LINE BREAK
               return arrLit.join('\n');
          }
         
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
