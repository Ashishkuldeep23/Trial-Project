const express = require("express")

const route = require("./src/router/router")
const app = express()



// app.use(express.urlencoded({ extended: true }))
// app.use(express.urlencoded( ))

app.use(express.json())

app.use(express.static('public'))


app.get("/" , (req ,res)=>{


    res.sendFile( __dirname + "/public/index.html")


})


// app.get("/next" , (req ,res)=>{ res.sendFile( __dirname + "/public/ashish.html") })

app.use("/" , route)


const port = process.env.PORT || 4000

app.listen( port , ()=>{
    console.log(`Express app running on port ${port}`)
} )

