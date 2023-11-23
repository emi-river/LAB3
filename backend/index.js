const express = require('express'),
  path = require('path')

const app = express(),
  port = process.env.PORT || 3000

app.use(express.json())

const dotenv = require('dotenv'),
  { Client } = require('pg')

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
  host: 'database'
})

client.connect()

app.get('/person', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM person;')

  response.send(rows)
})

app.get('/person/:id', async (request, response) => {
  const id = request.params.id
  const { rows } = await client.query(
    'SELECT * FROM person WHERE personId = $1;',
    [id]
  )

  response.send(rows)
})

app.post('/person', async (request, response) => {
  const { user, email, password } = request.body
  await client.query(
    'INSERT INTO person(username, email, password) VALUES ($1, $2, $3);',
    [user, email, password]
  )

  const { rows } = await client.query('SELECT * FROM person;')

  response.status(201).send(rows)
})

app.put('/person/:id', async (request, response) => {
  const id = request.params.id
  const { username, email, password } = request.body
  await client.query(
    'UPDATE person SET username = $1, email = $2, password = $3 WHERE personId = $4;',
    [username, email, password, id]
  )
  const { rows } = await client.query(
    'SELECT * FROM person WHERE personId = $1;',
    [id]
  )
  response.send(rows)
})

app.delete('/person/:id', async (request, response) => {
  const id = request.params.id
  await client.query('DELETE FROM person WHERE personId = $1;', [id])
  response.send(`User deleted with ID: ${id}`)
})

const multer = require('multer')

const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.join(__dirname, 'backend', 'images'))
  },

  filename: (request, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage })

app.post('/api/', upload.single('image'), (request, response) => {
  try {
    response.send('Image Uploaded')
  } catch (error) {
    console.error('Error uploading image', error)
    response.status(500).send('Internal Server Error')
  }
})

app.use(express.static(path.join(path.resolve(), 'public')))

app.listen(3000, () => {
  console.log(`http://localhost:${port} is live!`)
})
