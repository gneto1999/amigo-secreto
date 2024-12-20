import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
const database = process.env.DATABASE || ''
const host = process.env.HOST || ''
const user = process.env.USER || ''
const password = process.env.PASSWORD || ''

const conn = new Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres',
    logging: console.log
})

export default conn