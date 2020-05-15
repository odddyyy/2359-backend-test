require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//routing
app.use('/', require('./routes'))

//error handler
app.use(require('./middlewares/errorHandler'))

app.listen(port, () => console.log('Server running on port: ' + port))