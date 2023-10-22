const express = require('express')
const cors = require ('cors');


const filmRouter = require('./routes/filmsRoutes')
const filterRouter = require('./routes/filterRoutes')
const listRouter = require('./routes/listRoutes')
const errorResponse = require('./utils/errorResponse')

const app = express();

// import cors from 'cors'
app.use(
  cors({
    origin:["http://localhost:5173"],
    methods:['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH']
    
  })
);



app.use('/getmovies', filmRouter)

app.use('/filters', filterRouter)

app.use('/list', listRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})



// esta respuesta se usaria en todas las rutas inexistentes, o que no se configuraron.
app.use('*', (req, res) => {
  try {
    throw new Error ('Pagina no encontrada')
    
  } catch (error) {
     errorResponse(res,404,error)
  }
  
});


