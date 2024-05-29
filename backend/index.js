const express = require('express')
const app = express()

const defaultRoute = require('./routes/defaultRouter')


app.use('/api/tasks', defaultRoute)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})