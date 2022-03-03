
const novelsGenres = (connection, Sequelize, novels, genres) => {
  return connection.define('novelsGenres', {
    novelId: { type: Sequelize.INTEGER, references: { model: novels, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, references: { model: genres, key: 'id' } },
  })
}

module.exports = novelsGenres
