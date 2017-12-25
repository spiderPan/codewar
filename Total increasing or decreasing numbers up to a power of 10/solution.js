function totalIncDec(x) {
  switch (x) {
    case 0:
      return 1;

    case 1:
      return 10;

    case 2:
      return 100;

    case 3:
      return 475;

    case 4:
      return 1675;

    case 5:
      return 4954;

    case 6:
      return 12952;
  }

  return Math.round(2 * h(9, x) + h(10, x - 1) - 10 + totalIncDec(x - 1));

}

function factorial(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}

function c(l, u) {
  let count = u,
    top = l,
    bottom;

  while (count > 1) {
    l--;
    top *= l;
    count--;
  }

  bottom = factorial(u);

  return top / bottom;
}

function h(l, u) {
  return c(l + u - 1, u);
}
