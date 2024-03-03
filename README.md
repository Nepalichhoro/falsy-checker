# Falsy Checker

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Falsy Checker is a Node.js utility that performs a recursive depth search through a specified root folder, examining the content of files to determine if they contain falsy values. This can be a handy utility for identifying files with potentially problematic or undesirable content.

## Installation

To use Falsy Checker in your project, install it via npm:

```bash

npm install falsy-checker

```

## Usage

```javascript
npm install falsy-checker
const { traverseDirectory, isFalsy } = require('falsy-checker');

// Specify the root folder here

const rootFolder = '/path/to/your/root/folder';

traverseDirectory(rootFolder);
```
## Customizing the Falsy Check

The isFalsy function is a crucial part of Falsy Checker, allowing you to define what is considered falsy based on your specific requirements. 

This function is used to evaluate the content of each file and determine if it contains a falsy value.

Here's an example isFalsy function that includes various JavaScript falsy edge cases:

```javascript
function isFalsy(value) {
  // Customize this function to define what is considered falsy based on your requirements
  return (
    !value ||
    !value.hasOwnProperty('requiredProperty') ||
    (Array.isArray(value) && value.length === 0) ||
    value === '' ||
    value === 0 ||
    isNaN(value) ||
    value === null ||
    value === undefined ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    value === false
  );
}

```
Feel free to adapt the isFalsy function to your specific use case and criteria for identifying falsy values.


# Testing

The utility comes with a set of unit tests covering various scenarios and edge cases. To run the tests, execute the following command:

```bash

npm test

```

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or would like to contribute to the project, please open an issue or create a pull request.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

