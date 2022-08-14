const express = require('express')
const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'course',
  password: 'root',
  database: 'course',
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) VALUES('Rodrigo')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('<h1>Full Ciclye</h1>')
})

app.listen(port, () => {
  console.log('app listening' + port)
})