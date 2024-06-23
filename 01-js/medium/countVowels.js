/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str1) {
    str = str1.toLowerCase();
    return str.split("a").length + str.split("e").length +str.split("i").length +str.split("o").length +str.split("u").length -5;
}

module.exports = countVowels;