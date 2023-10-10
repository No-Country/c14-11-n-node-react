const { Router } = require('express')

const filmRouter = Router()

filmRouter.get(`/`, (req, res) => {
  try {
    return res.status(200).send('still working')
  } catch (error) {
    return res.status(404).send(error)
  }
})

module.exports = filmRouter
