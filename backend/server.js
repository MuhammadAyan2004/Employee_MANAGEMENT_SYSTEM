require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

// mongoose.connect(process.env.DB_PATH).then(()=>{
//     app.listen(PORT,()=>{
//         console.log("your server is running on port 3000...")
//     })
// }).catch(err =>{
//     console.log("the server is not connecting to database:",err)
// })

async function startServer() {
    if (!process.env.DB_PATH) throw new Error("missing reqiured enviroment variable: db_path")
    if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
        throw new Error("your jwt seceret key must be atleast 32 character long")
    }

    await mongoose.connect(process.env.DB_PATH)
    const server = app.listen(PORT, () => {
        console.log(`Employee Management API listening on port ${PORT}`);
    })

    const shutdown = async (signal) => {
        console.log(`${signal} recived. shutting down...`)
        server.close(async () => {
            await mongoose.disconnect()
            process.exit(0)
        })
    }
    process.once("SIGINT", () => shutdown("SIGINT"))
    process.once("SIGTERM", () => shutdown("SIGTERM"))
}

startServer().catch((error) => {
    console.error("Unable to start the server:", error.message);
    process.exit(1);
})

