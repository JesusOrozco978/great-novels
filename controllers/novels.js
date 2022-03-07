const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [{
      model: models.Author
    }, {
      model: models.Genres
    }]
  })


  return response.send(novels)
}

const getNovelsById = async (request, response) => {
  const { id } = request.params
  const foundNovels = await models.Novels.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: id },
        { title: { [models.Sequelize.Op.like]: `%${id}%` } },
      ]
    },
    include: [{
      model: models.Author
    }, {
      model: models.Genres
    }]
  })

  return foundNovels
    ? response.send(foundNovels) : response.sendStatus(404)
}

module.exports = {
  getAllNovels,
  getNovelsById
}
