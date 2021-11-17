const router = require('express').Router()

const controllers = require('../controllers/index')
const account = require('../controllers/account')
const authentication = require('../middlewares/authentication')

router.post('/register', account.register)
router.post('/login', account.login)
router.use(authentication)
router.get('/mountain', controllers.getMountain)
// router.post('/')
// router.delete('/')

// router.use('/')

module.exports = router