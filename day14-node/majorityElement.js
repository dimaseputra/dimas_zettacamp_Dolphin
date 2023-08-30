function majorityElement(nums) {
  const listNums = {};
  let mostCommonValue = 0;
  let mostCommonCount = 0;
  nums.forEach((value) => {
    if (!listNums[value]) {
      listNums[value] = [value];
    } else {
      listNums[value].push(value);
    }
  });
  //console.log(listNums);

  for (const i in listNums) {
    const currentCount = listNums[i].length;
    if (currentCount > mostCommonCount) {
      mostCommonCount = currentCount; //2
      mostCommonValue = i;
    }
    // else if (currentCount === mostCommonCount) {
    //   mostCommonValue = 'there are the same number';
    // }
    // console.log(mostCommonCount);
  }
  return mostCommonValue;
}
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([0, 1, 2, 3, 1, 2, 2])); // Output: 3
