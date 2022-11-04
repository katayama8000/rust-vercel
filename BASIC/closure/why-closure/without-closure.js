const fs = require('fs');

const inputDir = 'input';
const outputDir = 'output';

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.trace();
        throw err
    };
    console.log(1);

    files.forEach(file => {
        fs.readFile(`${inputDir}/${file}`, (err2, data) => {
            if (err2) {
                console.trace();
                throw err2
            };
            console.log(2);

            console.log(data);
            const outputData = parseInt(data) * 2;
            //NumberをStringに変換
            const outputDataString = outputData.toString();
            fs.writeFile(`${outputDir}/${file}`, outputDataString, (err3) => {
                if (err3) {
                    console.trace();
                    throw err3
                };
                console.log(3);
                console.log('The file has been saved!');
            });
        });
    });
});