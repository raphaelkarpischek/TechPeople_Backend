const jwt = require('jsonwebtoken')
const coletaToken = require('./coleta-token')

// middleware para validadar token
const validaToken = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).json({ message: 'Acesso negado' })
    }

    const token = coletaToken(req)

    if(!token) {
        return res.status(401).json({ message: 'Acesso negado' })
    }

    try {
        const verified = jwt.verify(token, 'secret')
        req.user = verified
        next()
    } catch (err) {
        return res.status(400).json({ message: 'Token inválido'} )
    }

}

module.exports = validaToken