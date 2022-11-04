const fs = require("fs");

const inputDir = 'input';
const outputDir = 'output';

function readDirCallback(err, files) {
    console.log("readDirCallback");
    if (err) {
        console.trace();
        process.exit(1);
    }
    files.forEach(function (file) {
        fs.readFile(`${inputDir}/${file}`, readFileCallback(file));
    });
}

function readFileCallback(file) {
    console.log("readFileCallback");
    return function (err, data) {
        if (err) {
            console.trace();
            process.exit(1);
        }
        const outputData = parseInt(data) * 2;
        const outputDataString = outputData.toString();
        fs.writeFile(`${outputDir}/${file}`, outputDataString, writeFileCallback);
    }
}

function writeFileCallback(err) {
    console.log("writeFileCallback");
    if (err) {
        console.trace();
        process.exit(1);
    }
    console.log('The file has been saved!');
}

fs.readdir(inputDir, readDirCallback);