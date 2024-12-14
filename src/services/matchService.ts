import Participant from "../types/participantType"
import shuffleArray from "../utils/shuffleArray"

async function generateMatch(groupId: number, participants: Participant[]) {
    const shuffled = shuffleArray(participants)
    
}