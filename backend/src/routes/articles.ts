import { Router } from "express";
import {
  create_article,
  get_articles,
  get_article_by_id,
} from "../controllers/articles";

const router = Router();

router.get("/", get_articles);

//TODO: Unify error handling for getting by id
//TODO: Implement rate limiting
router.get("/:id", get_article_by_id);
router.post("/", create_article);

export default router;
