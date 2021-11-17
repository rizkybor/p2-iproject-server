const bcrypt = require('bcryptjs')

function hashedPassword(password){
    const salt = bcrypt.genSaltSync(8)
    return bcrypt.hashSync(password,salt)
}

function comparePassword(password, passwordHashed){
    return bcrypt.compareSync(password, passwordHashed)
}

module.exports = { hashedPassword, comparePassword }