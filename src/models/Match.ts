import conn from "../conection";
import { DataTypes } from "sequelize";

const Match = conn.define('tb_match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
}, {
    freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
})

export default Match