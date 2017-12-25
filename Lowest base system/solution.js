function getMinBase(number) {
  for (let b = 2; b <= Math.floor(Math.sqrt(number)); b++) {
    let num = number;
    while (num % b == 1) {
      num = Math.floor(num / b);
      if (num == 1) {
        return b;
      }
    }

  }

  return number - 1;
}
