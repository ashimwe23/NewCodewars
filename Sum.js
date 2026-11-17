function digits(n) {
  const str = String(n);
  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      result.push(Number(str[i]) + Number(str[j]));
    }
  }

  return result;
}