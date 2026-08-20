import { Router } from "express";
import {
  get_member_by_id,
  get_members,
  post_members,
} from "../controllers/members";

const router = Router();

router.get("/", get_members);

router.get("/:id", get_member_by_id);

//TODO: Make post routes protected
//TODO: Implement rate limiting
router.post("/", post_members);

export default router;
