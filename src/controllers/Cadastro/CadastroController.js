import User from "../../models/User.js"

// Controller de Cadastro de usuarios
export const cadastroUser = async (req, res) => {
    try{
        const userToCreate = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const user = await User.create(userToCreate)

    res.status(201).json(user)
    
    }catch(e){
        res.status(500).json(e)
    }
    
}

export default cadastroUser