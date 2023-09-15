function sortNumbers(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

const sampleNumbers = [7, 2, 10, 1, 5, 3];

const sortedNumbers = sortNumbers(sampleNumbers);
console.log("Sorted Numbers:", sortedNumbers);

function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

const evenNumbers = filterEvenNumbers(sampleNumbers);
console.log("Even Numbers:", evenNumbers);
