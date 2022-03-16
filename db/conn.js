const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('techpeople', 'root', 'xD@p9425', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao MySQL')
} catch (err) {
    console.log(`Não foi possível conectar a base de dados: ${err}`)
}

module.exports = sequelize