const express = require("express")
const welcomeRouter = require("./welcome/welcomeRouter")
const usersRouter = require("./users/usersRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use("/", welcomeRouter)
server.use("/api", usersRouter)

server.use((error, req, res, next) => {
    console.log(error)
    res.status(500).json({
        message: "Uh-oh! Something went very, very wrong. Good-luck."
    })
})

if (!module.parent){
    server.listen(port, () => {
        console.log(`Server high as a kite at http://localhost:${port}`)
    })
}
module.exports = server;