const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

//const port = 5000

const app = express()

app.use(express.json())

// Models
const Usuario = require('./models/Usuario')

// Cors config
app.use(cors({ credential: true, origin: 'https://techpeople-frontend.herokuapp.com/' }))

// Pasta para IMGs
app.use(express.static('public'))

// Rotas
const UserRoutes = require('./routes/UsuarioRoutes')

app.use('/usuarios', UserRoutes)

conn
    //sync({ force: true })
    .sync()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`App rodando na porta`)
        })
    })
    .catch((err) => console.log(err))

