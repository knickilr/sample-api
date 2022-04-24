const express = require('express');
const app = express()

const port = process.env.PORT || 8787

app.use(express.json())
app.use((req,res,next)=> {
    setTimeout(()=>next(), 5000)
})
app.get('/api', (req, res)=> {
    res.send("Default response")
})

app.listen(port, ()=>console.log("Started server"))