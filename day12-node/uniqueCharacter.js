function hasUniqueCharacters(str) {
  let charMap = {};

  for (let char of str) {
    if (charMap[char]) return false;

    charMap[char] = true;
    console.log(charMap);
  }

  return true;
}

console.log(hasUniqueCharacters('akudimaas'));
