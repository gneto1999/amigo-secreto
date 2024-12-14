import conn from "../conection";
import { DataTypes } from "sequelize";
import Match from "./Match";

const Participant = conn.define('tb_participant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true, // Impede o Sequelize de pluralizar o nome da tabela
})

Participant.hasOne(Match, { foreignKey: "giverId" })
Match.belongsTo(Participant, { foreignKey: "receiverId" })

export default Participant