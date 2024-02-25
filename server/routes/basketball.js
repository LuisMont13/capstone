const express = require("express")
const router = express.Router()
const {UnknownATM} = require("../models");
const basketball = require("../models/basketball");

router.get("/", async (req,res) =>{
    const listOfBasketball = await index.findAll();
    res.json(listOfBasketball);
})

router.post("/", async (req, res) =>{
    const bballOdds = req.body;
    await basketball.creatte(bballOdds);
    res.json(bballOdds);

});


module.exports = router;
