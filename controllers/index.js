const { Mountain, Listing, User } = require("../models")


class Controller {
    static async getMountain(req, res, next) {
        try{
           console.log ('masuk controller get mountain')
        }
        catch(err){
            res.send(err)
        }
    }
}

module.exports = Controller