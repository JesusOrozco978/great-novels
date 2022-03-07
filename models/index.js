const Sequelize = require('sequelize')
const AuthorModel = require('./author')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsGenres')
const allConfigs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Author = AuthorModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Author)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Author.hasMany(Novels)
Novels.belongsTo(Author)
Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = {
  Author, Novels, Genres, NovelsGenres, Sequelize,
}
