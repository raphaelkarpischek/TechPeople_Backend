const jwt = require('jsonwebtoken')

const Usuario = require('../models/Usuario')

// busca usuário através do token JWT
const buscaUsuarioToken = async (token) => {
    if(!token) {
        return res.status(401).json({ message: 'Acesso Negado' })
    }

    const decoded = jwt.verify(token, 'secret')

    const userId = decoded.id

    const usuario = await Usuario.findOne( {where: { id: userId }} )

    return usuario
}

module.exports = buscaUsuarioToken