const express = require('express')
const app = express()

app.use('/', express.static('./dest'))

app.listen(3000)
