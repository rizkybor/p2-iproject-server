const router = require('express').Router()

const Controller = require('../controllers')
const erorHandler = require('../middlewares/errorHandler')
const Account = require('../controllers/account')
const authentication = require('../middlewares/authentication')

router.post('/register', Account.register)
router.post('/login', Account.login)
router.use(authentication)
router.get('/heroes', Controller.getHeros)
router.post('/myheroes/:id')

router.use(erorHandler)

module.exports = router