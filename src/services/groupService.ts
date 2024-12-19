import groupRepository from "../repository/groupRepository"
import Group from "../types/groupType"

async function createGroup(group: Group) {
    return groupRepository.create(group)
}

async function getGroupById(id: number) {
    return groupRepository.findById(id)
}

export default {
    createGroup,
    getGroupById
}