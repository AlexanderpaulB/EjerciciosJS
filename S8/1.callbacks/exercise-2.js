const userAnwsers = [];

function confirmExample(description) {
  return confirm(description);
}

function promptExample(description) {
  return propmt(description);
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}


father("Soy un texto", confirmExample);
father("Soy un texto", promptExample);
console.log(userAnwsers);


