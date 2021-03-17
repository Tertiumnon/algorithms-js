/* eslint-disable no-console */
const fs = require('fs');

// get name

if (process.argv.length < 3) {
  console.error('no arguments');
  process.exit(1);
}
const name = process.argv[2];
const dir = process.argv[3];

const camelToSnakeCase = (str) => {
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

const filename = camelToSnakeCase(name);

// create fn

const fnContent = `const ${name} = () => {
};

module.exports = ${name};
`;

fs.writeFile(`./${dir}/${filename}.js`, fnContent, (err) => {
  if (err) {
    return console.error(err.message);
  }
  return true;
});

// create spec

const specContent = `const fn = require('../${dir}/${filename}');

describe('testing ${name}', () => {
  it('case 1', () => {
    // const expectedRes = ;
    // const res = fn();
    // expect(expectedRes).toEqual(res);
  });
});
`;

fs.writeFile(`./spec/${filename}.spec.js`, specContent, (err) => {
  if (err) {
    return console.error(err.message);
  }
  return true;
});
