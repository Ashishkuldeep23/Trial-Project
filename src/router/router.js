const express = require("express")

const router = express.Router()



router.get("/next"  , (req ,res)=>{


    
    // console.log(process.cwd())      // // // This will returns current working directory where node project is created.
    // console.log(__dirname)           // // // This will returns Full director name where you are present.

    // // // // so best this if working with frontEnd and backEnd use --> process.cwd()

    res.sendFile( process.cwd() +'/public/ashish.html')
     

})



module.exports = router


