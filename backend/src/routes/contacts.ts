import { Router } from "express";
import {
  get_contact_by_id,
  get_contacts,
  post_contact,
} from "../controllers/contacts";

const router = Router();

//TODO: Make the returned value filtered to wanted fields only
//TODO: Make patch route for all paths
router.get("/", get_contacts);

router.get("/:id", get_contact_by_id);
router.post("/", post_contact);

export default router;
