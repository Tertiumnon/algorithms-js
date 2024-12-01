/* eslint-disable no-console */
const fs = require('node:fs');

// get name

if (process.argv.length < 3) {
  console.error('No valid arguments');
  process.exit(1);
}
const dir = process.argv[2];
const name = process.argv[3];

const filename = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

// create fn

const fnContent = `const ${name} = () => {
  
};

export default ${name};
`;

fs.writeFile(`./src/${dir}/${filename}.ts`, fnContent, (err) => {
  if (err) {
    return console.error(err.message);
  }
  return true;
});

// create spec

const specContent = `import { test, expect } from "bun:test";
import ${name} from './${filename}';

test('case 1', () => {
  const result = ${name}();
  expect(result).toEqual();
});
`;

fs.writeFile(`./src/${dir}/${filename}.spec.ts`, specContent, (err) => {
  if (err) {
    return console.error(err.message);
  }
  return true;
});
