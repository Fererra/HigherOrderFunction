'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const type = types[i];
    const name = type.name.toLowerCase();
    if (typeof arg !== name) {
      throw new TypeError(`Argument type ${name} expected`);
    }
  }
  const result = fn(...args);
  const resultType = types[types.length - 1];
  const name = resultType.name.toLowerCase();
  if (typeof result !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }
  return result;
};

module.exports = { contract };
