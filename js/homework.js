const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomCharacterForString() {
  return ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
}

console.log(randomCharacterForString());

/// ======== Puzzle with an asterisk! ===========================

let price = "$120";
let dollarRate = "41.53 ₴";
let totalPrice = "Cost is $158.73";

function extractCurrencyValue(str) {
  if (str.includes(".")) {
    console.log(str.replace(/[^0-9.]/g, ""));
  } else {
    console.log(str.replace(/\D/g, ""));
  }
}

extractCurrencyValue(price);
extractCurrencyValue(dollarRate);
extractCurrencyValue(totalPrice);
