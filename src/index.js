require('express-async-errors')

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const dotenv = require('dotenv')
const logger = require('./winston');
const swaggerDocs = require('./swagger.json')

dotenv.config()

const routes = require('./routes')

const app = express()

app.use(express.json())

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(routes)

app.use((error, request, response, next) => {
    logger.error(error)
    response.sendStatus(500)
    next()
})

app.listen(3000, () => console.log(`Server started at http://${process.env.NODE_HOST}:${process.env.NODE_PORT}`))
