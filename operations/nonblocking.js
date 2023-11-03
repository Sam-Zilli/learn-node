const fs = require("fs");

function moreWork() {
    console.log('more work');
}

fs.readFile("data/file.txt", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
});
moreWork();

// more work is consoled before the readFile 
// console because the async
// fs.readFile wasn't waited for / didn't
// finish until after moreWork() ran
