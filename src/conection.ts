import { Sequelize } from "sequelize";

const conn = new Sequelize("amigosecreto", "postgres", "ffc1902", {
    host: "localhost",
    dialect: "postgres",
    logging: console.log
})

export default conn