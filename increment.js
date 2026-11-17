

function incrementString(str) {
  let index = str.length - 1;

  while (index >= 0 && str[index] >= "0" && str[index] <= "9") {
    index--;
  }

  let text = str.slice(0, index + 1);
  let number = str.slice(index + 1);

  if (number === "") {
    return str + "1";
  }

  let incremented = String(Number(number) + 1);

  return text + incremented.padStart(number.length, "0");
}
