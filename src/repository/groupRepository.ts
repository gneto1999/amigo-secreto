import Group from "../models/Group"
import GroupType from "../types/groupType"

async function create(group: GroupType) {
    return Group.create(group)
}

async function findById(id: number) {
    return Group.findByPk(id)
}

export default {
    create,
    findById
}