const express = require('express')
const { getAllAuthor, getAuthorById } = require('./controllers/author')
const { getAllGenres, getGenresById } = require('./controllers/genres')
const { getAllNovels, getNovelsById } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthor)
app.get('/authors/:id', getAuthorById)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenresById)

app.get('/novels', getAllNovels)
app.get('/novels/:id', getNovelsById)



app.listen(1337, () => {
})
