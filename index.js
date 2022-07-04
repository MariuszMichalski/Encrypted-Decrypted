
const {pbkdf2} = require('crypto');

const password = process.argv[2];
const salt = 'DSvafbeaw45y4yu54w7q5ygaregq%YW$HFDFFBF%$W$URGAEFBWT$brffffahthwgq53w4yh'
const GOOD_PASS = "19c8a8e3fa169b266594e7a82167ddf50aecb8977b4a77d5953852a8ba0e62a7e1f3f10df80867db1fa462603f75892a86748664fcb20f174c234de69a649278"

pbkdf2(password, salt, 100000, 64, 'sha512', (err, hash) => {
    if (err) {
        console.error(err)
    } else {
        if (hash.toString('hex') === GOOD_PASS) {
            console.log('logged in')
        } else {
            console.log("wrong password")
        }
    }
})
