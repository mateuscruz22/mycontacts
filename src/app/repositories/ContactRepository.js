const uuid = require('uuid')

const db = require('../../database')

let contacts = [
    {
        id: '4e7f4289-3cc3-46ee-a895-20d7abc4e983',
        name: 'Mateus',
        email: 'mateus@email.com',
        phone: '37948542117',
        category_id: uuid.v4(),
    },
    {
        id: '02c14d94-b8eb-4c39-bf21-a49b90df3321',
        name: 'José',
        email: 'jose@email.com',
        phone: '37935468351',
        category_id: uuid.v4(),
    },
]

class ContactRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts))
    }

    findById(id) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id === id),
        ))
    }

    findByEmail(email) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email === email),
        ))
    }

    async create({
        name, email, phone, category_id,
    }) {
        const [row] = await db.query(`
            INSERT INTO contacts(name, email, phone, category_id)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `, [name, email, phone, category_id])

        return row
    }

    update(id, {
        name, email, phone, category_id,
    }) {
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id,
            }
            contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact))
            resolve(updatedContact)
        })
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id)
            resolve()
        })
    }
}

module.exports = new ContactRepository()
