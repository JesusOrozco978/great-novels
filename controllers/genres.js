const models = require('../models')

const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll()

  return response.send(genres)
}

const getGenresById = async (request, response) => {
  const { id } = request.params
  const foundGenres = await models.Genres.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{
        model: models.Author
      }]

    }]
  })

  return foundGenres
    ? response.send(foundGenres) : response.sendStatus(404)
}

module.exports = { getAllGenres, getGenresById }
