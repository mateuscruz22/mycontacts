const uuid = require('uuid')

const contacts = [
    {
        id: uuid.v4(),
        name: 'Mateus',
        email: 'mateus@email.com',
        phone: '37948542117',
        category_id: uuid.v4(),
    },
    {
        id: uuid.v4(),
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
}

module.exports = new ContactRepository()
