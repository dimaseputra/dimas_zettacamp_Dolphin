// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   } else if (n <= 3) {
//     return true;
//   } else if (n % 2 === 0 || n % 3 === 0) {
//     return false;
//   }
//   for (let i = 2; n % i === 0; i++) {
//     if (i != n) {
//       return false;
//     }
//   }
//   return true;
//   // Your logic here
// }
// console.log(isPrime(99));
//console.log(isPrime(2));

const isPrime = (x) => {
  if (x <= 1) return false;
  for (let i = 2; i + 2 <= x; i++) {
    if (x % i === 0) return false;
  }
  return true;
};

console.log(isPrime(49));
console.log(isPrime(9));
// console.log(isPrime(43));
