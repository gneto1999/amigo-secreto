import { Router } from "express"
import groupService from "../services/groupService"

const router = Router()

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const group = await groupService.getGroupById(id)
        if (group === null) {
            res.status(404).json({ })
            return
        }
        res.json(group)
    } catch (error: any) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const group = await groupService.createGroup(req.body)
        res.status(201).json(group)
    } catch (error: any) {
        res.status(500).json(error)
    }
})

export default router