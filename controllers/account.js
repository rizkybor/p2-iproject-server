const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const { User } = require("../models")

const register = async (req,res,next)=>{
    try{
        const { email, password } = req. body
        const foundUser = await User.create({ email, password })
        res.status(201).json({id: foundUser.id, email: foundUser.email})
    }
    catch(err){
        next(err)
    }
}


const login = async (req,res,next)=> {
    try{
        const { email, password } = req.body
        const userLogin = await User.findOne({where: {email}})
        if (!userLogin){
            throw({name: "Invalid"})
        }
        const validation = comparePassword(password, userLogin.password)
        if (!validation){
            throw({name: "Invalid"})
        }
        const tokenPayload = ({
            id: userLogin.id,
            email: userLogin.email
        })
        const token = signToken(tokenPayload)
        res.status(200).json({access_token: token})
    }   
    catch(err){
        next(err)
    }
}

module.exports = { register, login }
