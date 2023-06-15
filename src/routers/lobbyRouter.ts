import express from 'express';
import controllers from '../controllers/lobbyControllers';

const router = express.Router();

router.get('/', controllers.getLobbys)
router.post('/', controllers.createLobby);
router.delete('/', controllers.deleteLobby);

export default router;