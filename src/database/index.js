const { Client } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'mycontacts',
})

client.connect()

exports.query = async (query, values) => {
    const { rows } = await client.query(query, values)
    return rows
}
