const jwt = require('jsonwebtoken')

const criaTokenUsuario = async(usuario, req, res) => {

    // Cria Token JWT
    const token = jwt.sign({
        name: usuario.nome,
        id: usuario.id
    }, "secret")

    // Retorna o token
    res.status(200).json({
        mensagem: "Você está autenticado",
        token: token,
        userId: usuario.id
    })
}

module.exports = criaTokenUsuario