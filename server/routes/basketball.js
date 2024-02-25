const express = require("express")
const router = express.Router()
const {UnknownATM} = require("../models");
const basketball = require("../models/basketball");




// const apiKey = 'YOUR_API_KEY'
// const sportKey = 'upcoming'
// dont need regions per say
// dont need markets
// https://the-odds-api.com/liveapi/guides/v4/samples.html
// this website teaches how to code it in node


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
