import express from 'express'
import conn from './conection'
import './models/Group'
import './models/Participant'
import './models/Match'

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

conn.sync({ force: false }) // force: false para evitar recriação de tabelas a cada reinício
    .then(() => {
        app.listen(3000, () => console.log('Api running on port 3000....'));
    })
    .catch(err => console.log('Error syncing database:', err));