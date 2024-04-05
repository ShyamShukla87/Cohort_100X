const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    const newData = data.replace(/\s+/g, ' ').trim();

    fs.writeFile('file.txt', newData, (err) => {
        if (err) throw err;
        console.log('The file has been cleaned!');
    });
});
