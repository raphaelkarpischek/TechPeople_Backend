const { Sequelize } = require('sequelize')

/*const sequelize = new Sequelize('techpeople', 'root', 'xD@p9425', {
    host: 'localhost',
    dialect: 'mysql'
})*/

const sequelize = new Sequelize('heroku_e53f2cec4a48c71', 'bc3a8ad451a401', '688b11b8', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado ao MySQL')
} catch (err) {
    console.log(`Não foi possível conectar a base de dados: ${err}`)
}

module.exports = sequelize