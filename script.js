function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1],
  };

  let romanNumeral = '';

  for (let i = 0; i <= 6; i++) {
    const [symbol, value] = obj[i];

    // Handling subtraction cases
    if (i % 2 === 0 && i + 2 <= 6 && num >= value - obj[i + 2][1]) {
      romanNumeral += obj[i + 2][0] + symbol;
      num -= value - obj[i + 2][1];
    } else if (i % 2 !== 0 && i + 1 <= 6 && num >= value - obj[i + 1][1]) {
      romanNumeral += obj[i + 1][0] + symbol;
      num -= value - obj[i + 1][1];
    }

    // Handling regular cases
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }
  }

  return romanNumeral;
}

// Example usage:
console.log(convertToRoman(36)); // Expected output: "XXXVI"

// do not edit below this line
module.exports = convertToRoman
	

