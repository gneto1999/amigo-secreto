import Participant from "../models/Participant"
import ParticipantType from "../types/participantType"

async function create(participant: ParticipantType) {
    Participant.create(participant)
}

async function findById(id: number) {
    return Participant.findByPk(id)
}

async function findByGroupId(groupId: number) {
    return Participant.findAll({ where: { groupId } })
}

export default {
    create,
    findById,
    findByGroupId
}