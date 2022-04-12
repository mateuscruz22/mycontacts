const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
})

client.connect()

async function query(q) {
    const { rows } = await client.query(q)
    return rows
}

exports.query = query
