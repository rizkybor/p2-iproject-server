const { Mountain, Listing, User } = require("../models")
const axios = require('axios')

class Controller {
    static async getMountain(req, res, next) {
        try{
        //    console.log ('masuk controller get mountain')
           const response = await axios.get('https://indonesia-public-static-api.vercel.app/api/volcanoes')
           console.log (response)
           res.status(200).json({
               message: 'Berhasil Fetching Rest API Gunung Indonesia',
               data: response.data
           })
        }
        catch(err){
            res.send(err)
        }
    }
}

module.exports = Controller