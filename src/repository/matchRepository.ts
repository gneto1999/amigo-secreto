import Match from "../models/Match";
import MatchType from "../types/matchType";

async function bulkCreate(matches: MatchType[]) {
    return Match.bulkCreate(matches)
}

async function findByGiverId(giverId: number) {
    return Match.findOne({ where: { giverId } })
}

export default {
    bulkCreate,
    findByGiverId
}