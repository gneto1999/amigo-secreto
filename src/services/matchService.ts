import matchRepository from "../repository/matchRepository";
import Participant from "../types/participantType"
import shuffleArray from "../utils/shuffleArray"

async function generateMatch(groupId: number, participants: Participant[]) {
    if (participants.length < 2) {
        throw new Error("O grupo deve ter pelo menos 2 participantes para gerar matches.");
    }

    const shuffled = shuffleArray(participants)
    const matches = shuffled.map((participant, i) => {
        return {
            giverId: Number(participant.id),
            receiverId: Number(shuffled[(i + 1) % shuffled.length].id),
            groupId: groupId
        }
    })

    return matchRepository.bulkCreate(matches)
}

export default generateMatch