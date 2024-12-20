import express from 'express'
import conn from './conection'
import './models/Group'
import './models/Participant'
import './models/Match'
import routes from './routes/index'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.API_PORT || '3000'

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use('/api', routes)

conn.sync({ force: false }) // force: false para evitar recriação de tabelas a cada reinício
    .then(() => {
        app.listen(port, () => console.log(`Api running on ${port}....`));
    })
    .catch(err => console.log('Error syncing database:', err));