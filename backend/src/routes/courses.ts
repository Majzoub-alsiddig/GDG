import { Router } from "express";
import courseModel from "../models/courses";

//TODO: Unify error handling

const router = Router();

router.get("/", async (req, res) => {
  const courses = await courseModel.find();
  return res.status(200).json({ courses });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const course = await courseModel.findById(id);
  return res.status(200).json(course);
});

router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "empty body error" });
  const { name, url } = req.body;
  if (!(name && url))
    return res.status(400).json({ message: "Supply name and url in body" });
  await courseModel.create({ name, url });
  return res.status(200).json({ message: "Create user successfully" });
});

export default router;
