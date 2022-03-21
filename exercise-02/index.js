module.exports = function add(...args) {

  if (args.some(arg => typeof arg === "string")) {
    throw "Cannot call add with string"
  }

  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }

  return sum;
};
