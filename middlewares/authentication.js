const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const { token } = req.headers
        if(!token){
            // throw ({ msg: 'Unauthorized' })
            res.send(' no access_token ')
        }

        const payload = verifyToken(token)
        const findUser = await User.findOne({ where: {email: payload.email}})
        if(!findUser){
            // throw ({ msg:'Unauthorized' })
            res.send(' no find_user ')
        }
        req.User = {
            id: findUser.id,
            username: findUser.username,
            email: findUser.email,
            role: findUser.role
        }
        next()
    }
    catch(err){
        res.send(err)
    }
}

module.exports = authentication