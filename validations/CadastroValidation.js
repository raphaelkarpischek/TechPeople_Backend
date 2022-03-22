// middleware para validar campos de cadastro

const Usuario = require('../models/Usuario')
const criptografaSenha = require('../helpers/criptografa-senha')

const cadastroValidation = async (req, res) => {

    const { 
        nome, email, senha, confirmacaosenha,
        telefone, estado, area, descricao, tecnologia 
    } = req.body


    if(!req.file) {
        res.status(422).json({message: 'A imagem de perfil é obrigatória'})
        return
    }

    const imagem = req.file.filename

    if(!nome) {
        res.status(422).json({message: 'O nome é obrigatório'})
        return
    }

    if(!email) {
        res.status(422).json({message: 'O e-mail é obrigatório'})
        return
    }
    
    if(!telefone) {
        res.status(422).json({message: 'O telefone é obrigatório'})
        return
    }

    if(!estado || estado === 'Selecione uma opção') {
        res.status(422).json({message: 'O estado é obrigatório'})
        return
    }

    if(!area || area === 'Selecione uma opção') {
        res.status(422).json({message: 'A area de atuação é obrigatória'})
        return
    }

    if(!descricao) {
        res.status(422).json({message: 'A descrição é obrigatória'})
        return
    }

    if(!tecnologia) {
        res.status(422).json({message: 'Campo tecnologias é obrigatório'})
        return
    }

    if(!senha) {
        res.status(422).json({message: 'A senha é obrigatória'})
        return
    }

    if(!confirmacaosenha) {
        res.status(422).json({message: 'A confirmação de senha é obrigatória'})
        return
    }

    if(senha !== confirmacaosenha) {
        res.status(422).json({message: 'As senhas não conferem'})
        return
    }

    // Verificando se e-mail já está em uso
    const emailDisponivel = await Usuario.findOne({where: { email: email }})

    if (emailDisponivel) {
        res.status(422).json({message: 'Por favor utilize outro e-mail'})
        return
    }

    const senhaCriptografada = await criptografaSenha(senha) // Função (Helper) para criptografar a senha
    
    // Montando novo usuário
    const usuario = {
        nome, email, senha: senhaCriptografada, imagem,
        telefone, estado, area, descricao, tecnologia
    }

    return usuario

}

module.exports = cadastroValidation