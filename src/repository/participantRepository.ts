import Participant from "../models/Participant"
import ParticipantType from "../types/participantType"

async function create(participant: ParticipantType) {
    return Participant.create(participant)
}

async function findById(id: number) {
    return Participant.findByPk(id)
}

async function findByGroupId(groupId: number) {
    const participants = await Participant.findAll({ where: { groupId } })
    return participants.map(participant => {
        return {
            id: participant.getDataValue('id'),
            name: participant.getDataValue('name'),
            groupId: participant.getDataValue('groupId')
        }
    })
}

export default {
    create,
    findById,
    findByGroupId
}