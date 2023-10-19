const express = require('express')

const filmRouter = require('./routes/filmsRoutes')
const filterRouter = require('./routes/filterRoutes')
const listRouter = require('./routes/listRoutes')

// import cors from 'cors'

const app = express()

app.use('/getmovies', filmRouter)

app.use('/filters', filterRouter)

app.use('/list', listRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
