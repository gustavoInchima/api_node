import { Router } from "express";
import { methods as testController } from "../controllers/home.controller";

const router = Router();

router.get('/', testController.getMessages);
router.get('/:id', testController.getMessage);
router.post('/', testController.addMessage);
router.put('/:id', testController.updateMessage);
router.delete('/:id', testController.deleteMessage);

export default router;