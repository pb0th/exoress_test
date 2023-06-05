const express = require('express')

const app = express()


app.get('/', (req, res) => {
    return res.send("welcome")
})
app.listen(3000)