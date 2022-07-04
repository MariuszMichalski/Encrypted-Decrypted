const {readFile, writeFile} = require('fs').promises;
const { encryptText, hash } = require('./cipher');
const { ENCRYPTION_SALT, HASH_SALT } = require('./constants');



const pathFile = process.argv[2];
const password = process.argv[3];


(async() => {
    const readOfFile = await readFile(pathFile, 'utf8');
    const contentHash = hash(readOfFile, HASH_SALT);
    const encrypted = await encryptText(readOfFile, password, ENCRYPTION_SALT);
    encrypted.hash = contentHash
    await writeFile(pathFile, JSON.stringify(encrypted), 'utf8')

})();



