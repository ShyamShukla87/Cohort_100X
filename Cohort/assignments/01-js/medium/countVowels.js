/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let newStr1 = str.toLowerCase();
    let count = 0;

    for(let i = 0;i<newStr1.length;i++){
      if(newStr1[i]== "a" || newStr1[i] == "e" || newStr1[i] == "i" || newStr1[i] == "o" || newStr1[i] == "u" ){
        count++;
      }

    }
    return count;
}

module.exports = countVowels;