import { Router } from "express"
import groupRoute from "./group.routes"
import participantRoute from "./participant.routes"
import matchRoute from "./match.routes"

const router = Router()

router.use('/group', groupRoute)
router.use('/participant', participantRoute)
router.use('/matches', matchRoute)

export default router