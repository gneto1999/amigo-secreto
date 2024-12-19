import { Router } from "express";
import participantService from "../services/participantService";
import generateMatch from "../services/matchService";

const router = Router()

router.post('/group/:id', async (req, res) => {
    try {
        const groupId = Number(req.params.id)
        const participants = await participantService.getParticipantsByGroupId(groupId)
        const matches = await generateMatch(groupId, participants)
        res.status(201).json(matches)
    } catch (error: any) {
        res.status(500).json(error)
    }
})

export default router