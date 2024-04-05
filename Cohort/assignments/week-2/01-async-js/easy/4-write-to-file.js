// Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
fs.writeFile('4-write-to-file.md', 'Hello', (err) => {
    if (err) return console.log(err);
});

fs.readFile('4-write-to-file.md', 'utf8', (err, data) => {
    if (err) return console.log(err);
    console.log(data);
});