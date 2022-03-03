


const authors = (connection, Sequelize) => {
  return connection.define('authors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
  })
}

module.exports = authors
