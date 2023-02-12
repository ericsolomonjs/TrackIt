const firstLetterCapitalize = (str) => {
  if (str) {
    const string = str.toString();
    return string[0].toUpperCase() + str.slice(1);
  }
}

module.exports = {firstLetterCapitalize};