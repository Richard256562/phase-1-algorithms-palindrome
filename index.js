function isPalindrome(word) {
  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString  = reverseLetters.join('')

  if (word == reverseString){
    return true
  } else {
    return false
  }
  }


/* 
  Add your pseudocode here
   type in input string
  reverse the input string
   if the input string is the same as the reverse
     return true
   else
   return false
*/

/*
  Add written explanation of your solution here
A string is considere a plindrome if the it is read forward and read backwards it returns the same result for example nursesrun
  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  onsole.log("Expecting: true");
  console.log("=>", isPalindrome("nursesrun"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
