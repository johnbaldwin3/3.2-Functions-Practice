/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
    //...
    if (num1 > num2) {
      return (num1 + " is greater than " + num2);
    } else if (num2 > num1){
      return (num2 + " is greater than " + num1);
    } else if (num1 === num2) {
      return " Dude, these numbers are equal!";
    }


}




// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    //...

    if (num3 === num2 && num2 === num1) {
      return " Dude, these numbers are equal!";
    } else if ( num3 === num2 || num3 === num1 || num1 === num2) {
      return "There are two numbers that are the same"
    } else if (num1 > num2 && num1 > num3) {
      return (num1 + " is greater than " + num2 + " and also " + num3);
    } else if (num2 > num1 && num2 > num3){
      return (num2 + " is greater than " + num1 + " and also " + num3);
    } else if (num3 > num1 && num3 > num2){
      return (num3 + " is greater than " + num1 + " and also " + num2);
    }
  }




// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){

      return true;
    } else if (char === 'y') {
      return "Sometimes true :P";
    } else {
      return false;
    }
}

  // console.log(isVowel('a'));


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
    var roverArray = phrase.split("");
    // console.log(roverArray);

    for (var i = 0; i < roverArray.length; i++) {
      if (roverArray[i] != 'a' && roverArray[i] != 'e' && roverArray[i] != 'i' && roverArray[i] != 'o' && roverArray[i] != 'u' && roverArray[i] != ' ') {

        roverArray[i] +=  'o' + roverArray[i];
      }

    }
    var roverArray1 = roverArray.join("");
    //  console.log(roverArray1);
    return roverArray1;
}

// rovarspraket("this is fun");

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array1){
    "use strict";
    //...
    var numArrayToAdd = array1;
    var total = 0;

    for (var i = 0; i < numArrayToAdd.length; i++) {

      total += numArrayToAdd[i];

      }
      console.log(total);
      return total;
}

  // sum([1,-2,3,4, .5]);
//
function multiply(array2){
    "use strict";
    //...
    var numArrayToMultiply = array2;
    var total = 1;

    for (var i = 0; i < numArrayToMultiply.length; i++) {

      total *= numArrayToMultiply[i];

      }
      console.log(total);
      return total;
}

// multiply([1,2,3,4]);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

/* codecamp.com and MDN show and use this technique*/
function reverse(phrase){
    "use strict";
    //...
    var phraseArray = phrase.split("");
    // console.log(phraseArray);
    var phraseReverse = phraseArray.reverse();
    // console.log(phraseReverse);
    var phraseJoined = phraseReverse.join("");
    // console.log(phraseJoined);
    return phraseJoined;
}

//checking to see if output works...
// console.log(reverse("Hey there good buddy, did you hear about Clemson winning the Natty!"));
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    //add words to array
    var wordsInArray = words.split(" ");
    var longestWords = '';
    // console.log(wordsInArray.length);
    // console.log(longestWords.length);
    //check each word for length
    for (var i = 0; i < wordsInArray.length; i++){

      if (wordsInArray[i].length > longestWords.length){
        longestWords = wordsInArray[i];

      }
//come back and fix if two words are the same length

    }
      return longestWords.length;
}

// console.log(findLongestWord("I am reaDy to be the longest"));
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var num = i;
    var wordsArray = words.split(" ");
    var newArray = [];
    console.log(wordsArray);
    //...
    for (var j = 0; j < wordsArray.length; j++) {

      if (wordsArray[j].length > num) {
        newArray.push(wordsArray[j]);

      }


    }
    // console.log(newArray);
    return(newArray);
}
// filterLongWords("I like cheese and extra vocabulary", 4);
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
/*MDN and looked at --> top answer http://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript */
function charFreq(string){
    "use strict";
    //...

    //create blank object
    var charFrequency = {};
    var char;

    var test = {
      'a': 2,
      'b': 1
    }

    for (var i =0; i <string.length; i++) {
      char = string.charAt(i);
      if (charFrequency[char]) {
        charFrequency[char]++;
      } else {
        charFrequency[char] = 1;
      }
    }

    console.log(charFrequency)
}

charFreq("asdasfasdfsadfaewfgsdvgsdfasdasdghsda");
