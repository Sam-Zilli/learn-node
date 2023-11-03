const fs = require('fs');

function someAsyncOperation() {
  fs.readFile('/path/to/file', function(err, data) {
    if (err) console.log('Read Error');
    else console.log('Data: ' + data);
  });
}

function foo() {
  console.log('foo');
}

someAsyncOperation(); // bc of the readFile fn, this is added to the poll phase
foo(); // foo happens 1st / sequentially
console.log('done'); // this happens 2nd / sequentially

// finally the someAsyncOperation happens last
