const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{
            if (err) {
                reject(err);
                return
            }
             // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });    
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css','./dist/index.html', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};

module.exports = {writeFile,  copyFile};
