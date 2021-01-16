const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err =>{
            // if there's an error, reject the promis and send the error to the promise's .catch method
            if (err) {
                reject(err);
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Style sheet copied!'
            });
        });
    });
};

module.exports = {writeFile, copyFile};