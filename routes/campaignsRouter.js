import Router from "express";
import CampaignController from "../controllers/CampaignController.js";
const router = new Router();

// Создание новой кампании
router.post('/campaigns', CampaignController.create)

router.get('/campaigns', CampaignController.getAll)
router.get('/campaigns/:id', CampaignController.getOne)
router.put('/campaigns', CampaignController.update)
router.delete('/campaigns/:id', CampaignController.delete)

export default router;