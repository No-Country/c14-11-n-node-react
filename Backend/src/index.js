const express = require('express')

const filmRouter = require('./routes/filmsRoutes')
const filterRouter = require('./routes/filterRoutes')

const app = express()

app.use('/getmovies', filmRouter)

app.use('/filters', filterRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
