import express from 'express'
import userRoutes from './src/router/UserRouter.js/UseRoutes.js'
import User from './src/models/User.js'
import config from './src/config/db.cjs'
import { Sequelize } from 'sequelize'

const app = express()
const port = 3000

app.use(express.json())

// EndPoints
app.use('/usuarios', userRoutes)

// Config dos models
const sequelize = new Sequelize(config)
User.init(sequelize) // models de usuario recebe as config do banco

// auth Connect Banco
sequelize.authenticate().then(
    app.listen(port, () => 
        console.log('Servidor rodando na porta 3000'))
).catch((e) => {
    console.log(e)
})