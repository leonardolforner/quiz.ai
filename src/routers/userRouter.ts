import express from 'express';
import controllers from '../controllers/userControllers'

const router = express.Router();


router.get('/', controllers.getUsers);
router.delete('/', controllers.deleteUser);
router.post('/', controllers.createUser);
router.put('/', controllers.updateUser);
router.put('/score', controllers.updateScore);

export default router;