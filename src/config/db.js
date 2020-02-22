require('dotenv').config()
const { Pool } = require('pg')

module.exports = new Pool({
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: 'localhost',
	port: 5432,
	database: process.env.PGDATABASE
})
