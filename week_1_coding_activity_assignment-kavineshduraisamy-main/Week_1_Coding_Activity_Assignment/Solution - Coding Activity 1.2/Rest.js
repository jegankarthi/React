function sumAll(...rest) {
 let total = 0;
 for (const arg of rest) {
   total += arg;
 }
 return total;
}
console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10

//don't change this line
if (typeof module !== "undefined") {
 module.exports = { sumAll };
}