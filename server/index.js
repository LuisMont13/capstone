const express = require('express')
const app = express()
const cors = require('cors')


const db = require('./models')
app.use(cors());


app.listen(3001, () => {
    console.log("yea bud this thang working")
});
