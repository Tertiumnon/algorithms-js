/* eslint-disable no-console */
const fs = require('fs');

// get name

if (process.argv.length < 3) {
  console.error('no arguments');
  process.exit(1);
}
const name = process.argv[2];
const dir = process.argv[3];

// create fn

const fnContent = `const ${name} = () => {
};

module.exports = ${name};

`;

fs.writeFile(`./${dir}/${name}.js`, fnContent, (err) => {
  if (err) {
    return console.error(err.message);
  }
  return true;
});

// create spec

const specContent = `const fn = require('../${dir}/${name}');
describe('testing ${name}', () => {
  it('case 1', () => {
    // const expectedRes = ;
    // const res = fn();
    // expect(expectedRes).toEqual(res);
  });
});
`;

fs.writeFile(`./spec/${name}.spec.js`, specContent, (err) => {
  if (err) {
    return console.error(err.message);
  }
  return true;
});
