import express from 'express';
const router = express.Router()
import controller from '../controllers/HelpRequestsController.js';



router.get('/', controller.getAll);

router.get('/:id', controller.get);

router.post('/', controller.insert);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

export default router;