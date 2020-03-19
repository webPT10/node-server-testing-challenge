const express = require("express")
const welcomeRouter = require("./welcome/welcomeRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use("/", welcomeRouter)

server.use((error, req, res, next) => {
    console.log(error)
    res.status(500).json({
        message: "Uh-oh! Something went very, very wrong. Good-luck."
    })
})

server.listen(port, () => {
    console.log(`Server high as a kite at http://localhost:${port}`)
})