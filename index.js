function funk(...vari) {
  if (!vari.every((aNum) => Number.isNumber(aNum)))
    throw "All arguments must be numbers.";
  return vari.reduce((aNum, bNum) => aNum + bNum);
}

funk(1, 2, 3); //> 6
funk(10, "B", 20); //> error All arguments must be numbers.