/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length) return false
  let len = str1.length
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  const sortedStr1 = str1.split("").sort().join("")
  const sortedStr2 = str2.split("").sort().join("")

  return sortedStr1 == sortedStr2

  // let arr = []
  // for(let i=0; i < len; i++) {
  //   for(let j=0; j < len; j++) {
  //     if(str1[i] == str2[j]) {
  //       arr.push(str1[i])
  //       break;
  //     }
  //   }
  // }
  // let str3 = arr.join("")
  // return str1 == str3 ? true : false
}

module.exports = isAnagram;
