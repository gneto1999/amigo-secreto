import participantRepository from "../repository/participantRepository"
import Participant from "../types/participantType"

async function addParticipant(participant: Participant) {
    participantRepository.create(participant)
}

async function getParticipantById(id: number) {
    return participantRepository.findById(id)
}

async function getParticipantByGroupId(id: number) {
    return participantRepository.findByGroupId(id)
}

export default {
    addParticipant,
    getParticipantById,
    getParticipantByGroupId
}