const express = require("express")
const Users = require("./usersModel")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await Users.getAll())
    } catch(error){
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const user = await Users.insert(req.body)
        res.status(201).json(user)
    } catch(error){
        next(error)
    }
})

module.exports = router;