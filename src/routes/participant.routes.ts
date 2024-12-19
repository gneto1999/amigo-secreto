import { Router } from "express";
import participantService from "../services/participantService";


const router = Router()

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const participant = await participantService.getParticipantById(id)
        if (participant === null) {
            res.status(404).json({ })
            return
        }
        res.json(participant)
    } catch (error: any) {
        console.log(error)
    }
})

router.get('/group/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const participants = await participantService.getParticipantsByGroupId(id)
        if (participants === null) {
            res.status(404).json({ })
            return
        }
        res.json(participants)
    } catch (error: any) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const participant = await participantService.addParticipant(req.body)
        res.status(201).json(participant)
    } catch (error: any) {
        res.status(500).json(error)
    } 
})

export default router