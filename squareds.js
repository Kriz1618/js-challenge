const sortedSquaredArray = (numbers) => {
  if (!numbers.length) {
    return numbers;
  }

  const squareds = numbers.map(i => i * i);

  return squareds;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]) );