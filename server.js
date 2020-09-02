  
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname + '/dist'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server started on ${port}`)
})
