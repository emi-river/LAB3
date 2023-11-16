const express = require("express"),
  path = require("path");

const app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());

const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.get("/person", async (_request, response) => {
  const { rows } = await client.query("SELECT * FROM person");

  response.send(rows);
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(3000, () => {
  console.log(`http://localhost:${port} is live!`);
});
