const express = require('express')

const filmRouter = require('./routes/filmsRoutes')
const filterRouter = require('./routes/filterRoutes')

const popRouter = require('./routes/popRoutes')
// import cors from 'cors'

const app = express()
// app.use(
//   cors({
//     credentials: true,
//     origin: ['http://localhost:5173'],
//   })
// )

app.use('/getmovies', filmRouter)

app.use('/filters', filterRouter)

app.use('/pop', popRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
