const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
});
fs.unlinkSync("./operations/data.txt");		// delete the file

// this results in an error because the deletion happens before
// the readFile finishes executing. For this reason,
// when two things are linked they should be in the same callback
// ex:


const fs = require("fs");
fs.readFile("./operations/data.txt", (err, data) => {
  if (err) console.log(err.message);
  else  {
  console.log(data); // show the contents of the file
  fs.unlinkSync("./operations/data.txt"); // delete the file
  }	
});

