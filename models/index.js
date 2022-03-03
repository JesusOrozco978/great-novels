const Sequelize = require('sequelize')
const AuthorModel = require('./author')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsGenres')

const connection = new Sequelize('greatNovels', 'novels', 'Gr3AtN0velS', {
  host: 'localhost', dialect: 'mysql'
})

const Author = AuthorModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Author)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Author.hasMany(Novels)
Novels.belongsTo(Author)
Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = { Author, Novels, Genres, NovelsGenres }
