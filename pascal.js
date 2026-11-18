function toUnderscore(string) {
  string = String(string);

  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase() && isNaN(string[i])) {
      result += "_" + string[i].toLowerCase();
    } else {
      result += string[i];
    }
  }

  return result.startsWith("_") ? result.slice(1) : result;
}