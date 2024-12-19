import conn from "../conection";
import { DataTypes } from "sequelize";
import Participant from "./Participant";
import Match from "./Match";

const Group = conn.define('tb_group', {
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

Group.hasMany(Participant, { foreignKey: 'groupId' })
Participant.belongsTo(Group, { foreignKey: 'groupId' })

Group.hasMany(Match, { foreignKey: 'groupId'})
Match.belongsTo(Group, { foreignKey: 'groupId' })

export default Group