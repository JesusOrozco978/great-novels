const models = require('../models')


const getAllAuthor = async (request, response) => {
  const authors = await models.Author.findAll()

  return response.send(authors)
}

const getAuthorById = async (request, response) => {
  const { id } = request.params
  const foundAuthor = await models.Author.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{
        model: models.Genres
      }]

    }]
  })

  return foundAuthor
    ? response.send(foundAuthor) : response.sendStatus(404)
}

module.exports = {
  getAllAuthor,
  getAuthorById
}
