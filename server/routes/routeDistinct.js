const express = require("express")
const router = express.Router()
const {UnknownATM} = require("../models")

router.get("/", async (req,res) =>{
    const UnknownATM = await index.findAll();
})
