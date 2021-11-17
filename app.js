require('dotenv').config()
const cors = require("cors")
const express = require("express")
const app = express()
const router = require("./routes")
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})


module.exports = app
