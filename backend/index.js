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

app.post('/person', async (request, response) => {
  const { user, email, password } = request.body
  await client.query(
    'INSERT INTO person(user, email, password) VALUES ($1, $2, $3);',
    [user, email, password]
  )

  const { rows } = await client.query('SELECT * FROM person;')

  response.status(500).send(rows)
})

app.use(express.static(path.join(path.resolve(), 'public')))

app.listen(3000, () => {
  console.log(`http://localhost:${port} is live!`)
})
