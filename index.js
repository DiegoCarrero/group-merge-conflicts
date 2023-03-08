function sumAllNumbers(...elements) {
  if (!elements.every((element) => Number.isNumber(element)))
    throw "All arguments must be numbers.";
  return elements.reduce((a, b) => a + b);
}

sumAllNumbers(1, 2, 3); //> 6
sumAllNumbers(10, "B", 20); //> error All arguments must be numbers.