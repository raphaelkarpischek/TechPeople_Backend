const bcrypt = require('bcrypt')

async function criptografaSenha(senha) {

    //Criptografando senha
    const salt = await bcrypt.genSalt(10)
    const senhaCriptografada = await bcrypt.hash(senha, salt)

    return senhaCriptografada
}

module.exports = criptografaSenha