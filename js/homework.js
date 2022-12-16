// const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function randomCharacterForString() {
//   return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
// }

// console.log(randomCharacterForString());

// /// ======== Puzzle with an asterisk! ===========================

// let price = "$120";
// let dollarRate = "41.53 ₴";
// let totalPrice = "Cost is $158.73";

// function extractCurrencyValue(str) {
//   if (str.includes(".")) {
//     console.log(str.replace(/[^0-9.]/g, ""));
//   } else {
//     console.log(str.replace(/\D/g, ""));
//   }
// }

// extractCurrencyValue(price);
// extractCurrencyValue(dollarRate);
// extractCurrencyValue(totalPrice);

/*           HOMEWORK ARRAYs      */
//  ^^^^^^^^^^^^^^^^^ Task #1  ^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let d1 = [45, 78, 10, 3];
// d1[7] = 100; // Add one more number to array d1 ( d1[7] = 100)
// console.log(d1, d1[6], d1[7]); // Out the array and its elements with indices 6 and 7.

// ^^^^^^^^^^^^^^^^^ Task #2 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let d2 = [45, 78, 10, 3];
// let sum2 = 0;
// // method for - Sum of numbers in an array
// for (i = 0; i < d2.length; i++) {
//   sum2 += d2[i];
// }
// 136

//^^^^^^^^^^^^^^^^^^ Task #3 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let d3 = [45, 78, 10, 3];
// d3[7] = 100;
// let sum3 = 0;
// // method for in - Sum of numbers in an array
// for (let num in d3) {
//   sum3 += d3[num];
// }
// 236

//  ^^^^^^^^^^^^^^^^^^ Task #4 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
// let d4 = [45, 78, 10, 3];

// The function sorts the elements of an array in descending order.
// function my(a, b) {
//   return b - a;
// }

// d4.sort(my); // [78, 45, 10, 3]
