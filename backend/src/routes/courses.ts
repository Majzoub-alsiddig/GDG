import { Router } from "express";
import {
  get_courses,
  get_course_by_id,
  post_course,
} from "../controllers/courses";

//TODO: Unify error handling

const router = Router();

router.get("/", get_courses);

router.get("/:id", get_course_by_id);

router.post("/", post_course);

export default router;
