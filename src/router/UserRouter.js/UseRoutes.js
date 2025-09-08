import express from 'express'

const router = express.Router()

// Controllers
import cadastroUser from '../../controllers/Cadastro/CadastroController.js'


// Rotas
router.post('/cadastro', cadastroUser)


export default router