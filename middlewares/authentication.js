const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

const authentication = async (req,res, next)=>{
    try{
        const { access_token } = req.headers
        if(!access_token){
            throw({name: 'Unauthorized'})
        }
        const payload = verifyToken(access_token)
        const findUser = await User.findOne({where: {email: payload.email}})

        if (!findUser){
            throw({name: 'Unauthorized'})
        }
        req.User = {id: findUser.id, email:findUser.email}
        next()
    }
    catch(err){
        next(err)
    }
}

module.exports = authentication