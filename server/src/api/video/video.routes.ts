import {Router} from 'express'
import * as videoCtrl from './video.controller'


const router = Router()

router.post('/', videoCtrl.createVideo)
router.get('/', videoCtrl.getVideos)
router.get('/:id', videoCtrl.getVideoID)
router.put('/:id', videoCtrl.updateVideo)
router.delete('/:id', videoCtrl.deleteVideo)



export default router