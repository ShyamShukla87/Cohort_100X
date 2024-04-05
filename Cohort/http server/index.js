const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res)  {
  res.send('Hello World!')
})

app.post('/conversations', (req,res)=> {
    console.log(req.body);
    res.send({
        msg:"2 + 2 = 4"
    })
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})