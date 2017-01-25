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
      return (num1) // + " is greater than " + num2);
    } else if (num2 > num1){
      return (num2) // + " is greater than " + num1);
    } else if (num1 === num2) {
      return "Dude, these numbers are equal!";
    }


}

console.assert(max(1,2) == 2 );
console.assert(max(55,-1) == 55);
console.assert(max(5,5) == "Dude, these numbers are equal!" );


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
      return (num1) // + " is greater than " + num2 + " and also " + num3);
    } else if (num2 > num1 && num2 > num3){
      return (num2) // + " is greater than " + num1 + " and also " + num3);
    } else if (num3 > num1 && num3 > num2){
      return (num3) //+ " is greater than " + num1 + " and also " + num2);
    }
  }

console.assert(maxOfThree(1,2,4) == 4 );
console.assert(maxOfThree(55,-2,0) == 55 );
console.assert(maxOfThree(2,2,4) == "There are two numbers that are the same" );
console.assert(maxOfThree(2,2,2) == " Dude, these numbers are equal!");


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
console.assert(isVowel('a') == true);
console.assert(isVowel('b') == false);
console.assert(isVowel('y') == "Sometimes true :P");
console.assert(isVowel('12') == false);


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

console.assert(rovarspraket("this is fun") == "tothohisos isos fofunon");


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
      // console.log(total);
      return total;
}
console.assert(sum([1,-2,3,4, .5]) == 6.5);
console.assert(sum([0, 2,3,4, .5]) === 9.5);

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
      // console.log(total);
      return total;
}
console.assert(multiply([1,-2, 3, 4, .5]) == -12);
console.assert(multiply([0,-2,3,4, .5]) == 0);
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
    console.log(phraseJoined);
}

console.assert(reverse("Hey there good buddy, did you hear about Clemson winning the Natty!") == "!yttaN eht gninniw nosmelC tuoba raeh uoy did ,yddub doog ereht yeH");


//checking to see if output works...
console.assert(reverse("I like cheese and sometimes pancakes") == "sekacnap semitemos dna eseehc ekil I");
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    //add words to array    //had set up to take string and turn to array with split....
    var wordsInArray = words;//.split(" ");
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

console.assert(findLongestWord(["I", 'am', 'reaDy', 'to', "longest"]) == 7);
//console.log(findLongestWord(["I", 'am', 'reaDy', 'to', "longest"]));
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var num = i;
    var wordsArray = words.split(" ");
    var newArray = [];
    // console.log(wordsArray);
    //...
    for (var j = 0; j < wordsArray.length; j++) {

      if (wordsArray[j].length > num) {
        newArray.push(wordsArray[j]);

      }


    }
    // console.log(newArray);
    return(newArray);
}


var arrayChecker = filterLongWords("I like cheese and extra vocabulary", 4);
console.assert(arrayChecker.length == 3);
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
    console.log(charFrequency);
    return charFrequency;
}

var freqChecker = charFreq("asdasfasdfsadfaewfgsdvgsdfasdasdghsda");

console.assert(freqChecker.a == 8);
console.assert(freqChecker.d == 8);
console.assert(freqChecker.z == undefined);
