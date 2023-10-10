const express = require('express')
const filmRouter = require('./routes/filmsRoutes')
// import cors from 'cors'

const app = express()
// app.use(
//   cors({
//     credentials: true,
//     origin: ['http://localhost:5173'],
//   })
// )

app.use('/getmovies', filmRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
