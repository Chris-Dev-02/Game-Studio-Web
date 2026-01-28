import { Router } from "express";
import controller from "../controllers/general.controller.js";

const router = Router();

router.get("/", controller.getHome);
router.get("/about", controller.getAbout);
router.get("/faq", controller.getFAQ);
router.get("/team", controller.getTeam);
router.get("/project/:id", controller.getProjectDetail);
router.get("/news", controller.getNews);
router.get("/news/:id", controller.getNewsDetail);


router.use(controller.get404);

export default router;