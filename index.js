
function fn(...count) {
  if (!count.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return count.reduce((a, b) => a + b);
}

fn(1, 2, 2); //> 6
fn(10, 100, 20); //> error All arguments must be numbers.

function sumAllNumbers(...elements) {
  if (!elements.every((element) => Number.isNumber(element)))
    throw "All arguments must be numbers.";
  return elements.reduce((a, b) => a + b);
}

sumAllNumbers(1, 2, 3); //> 6
sumAllNumbers(10, "B", 20); //> error All arguments must be numbers.

