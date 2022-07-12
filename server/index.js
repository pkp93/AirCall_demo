const express = require('express')
const app = express()
const port = 3000

const URL = "https://aircall-job.herokuapp.com"

app.get('/getAll', (req, res) => {
  console.log("req is", req.body)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
