const fs = require('fs');

function someAsyncOperation(callback) { // this finishes BEFORE 100ms
  fs.readFile('./data/test.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => { 
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();
  console.log('someAsyncOperation');
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});


// someAsyncOperation happens first
// THEN 117ms have passed since I was scheduled