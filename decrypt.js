const {readFile, writeFile} = require('fs').promises;
const {decryptText, hash} = require('./cipher.js')
const { ENCRYPTION_SALT, HASH_SALT } = require('./constants')


const pathFile = process.argv[2];
const password = process.argv[3];



(async() => {
    const readOfFile = JSON.parse(await readFile(pathFile, 'utf8'))
    const decrypted = await decryptText(readOfFile.encrypted, password, ENCRYPTION_SALT, readOfFile.iv);
    const decryptedHash = hash(decrypted, HASH_SALT);

    if (decryptedHash === encrypted.hash) {
        await writeFile(pathFile, decrypted, 'utf8');
    } else {
        console.error('File is not original')
    }

})()


