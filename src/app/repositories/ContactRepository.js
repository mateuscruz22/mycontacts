const uuid = require('uuid')

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

    create({
        name, email, phone, category_id,
    }) {
        return new Promise((resolve) => {
            const newContact = {
                id: uuid.v4(),
                name,
                email,
                phone,
                category_id,
            }
            contacts.push(newContact)
            resolve(newContact)
        })
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
