const app = require('./app')
const mongoose = require('mongoose')

const PORT = 3000

mongoose.connect(process.env.DB_PATH).then(()=>{
    app.listen(PORT,()=>{
        console.log("your server is running on port 3000...")
    })
}).catch(err =>{
    console.log("the server is not connecting to database:",err)
})

