const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Usuario = db.define('User', {

    nome: {
        type: DataTypes.STRING,
        require: true,
    },
    email: {
        type: DataTypes.STRING,
        require: true,
    },
    senha: {
        type: DataTypes.STRING,
        require: true,
    },
    imagem: {
        type: DataTypes.STRING,
        require: false
    },
    telefone: {
        type: DataTypes.STRING,
        require: true
    },
    estado: {
        type: DataTypes.STRING,
        require: true,
    },
    area: {
        type: DataTypes.STRING,
        require: true,
    },
    descricao: {
        type: DataTypes.STRING,
        require: true,
    },
    tecnologia: {
        type: DataTypes.STRING,
        require: true
    },
    github: {
        type: DataTypes.STRING,
        require: true
    },
    linkedin: {
        type: DataTypes.STRING,
        require: true
    },
    visita: {
        type: DataTypes.INTEGER,
        require: false,
        defaultValue: 0
    },
    visivel: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    },
})

module.exports = Usuario