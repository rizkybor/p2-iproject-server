const { User } = require('../models')
const { signToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

const register = async (req, res, next)=>{
    try {
        const { username, email, password } = req.body
        const adminUser = await User.create({
            username,
            email,
            password,
            role: "admin"
        })
        if (adminUser) {
            res.status(201).json({
                id: adminUser.id,
                username: adminUser.username,
                email: adminUser.email,
            })
        }
    }
    catch(err){
        console.log (err)
        res.send(err)
    }
}

const login = async (req, res, next)=>{
    try{
        const { email, password } = req.body
        const userIsLogin = await User.findOne({where: { email }})
        
        if (!userIsLogin){
            throw ({ name: 'Invalid' })
        }
        let validatePassword = comparePassword(password, userIsLogin.password)
        console.log(validatePassword, '<<< lolos validasi user')
        if(!validatePassword){
            throw ({ name:'Invalid' })
        }

        let token = ({
            id: userIsLogin.id,
            email: userIsLogin.email,
        })

        let access_token = signToken(token)
        console.log (token)

        res.status(201).json({
            message: 'Login Success',
            email: token.email,
            token: access_token
        })
    }
    catch(err){
        console.log (err)
        res.send(err)
    }
}


module.exports = {register,login}