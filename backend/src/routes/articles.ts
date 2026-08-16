import { Router } from "express";
import articleModel from "../models/articles";

const router = Router();

router.get("/", async (req, res) => {
  const articles = await articleModel.find();
  return res.status(200).json({ articles });
});

//TODO: Unify error handling for getting by id
//TODO: Implement rate limiting
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const article = await articleModel.find({ id });
  return res.status(200).json({ article });
});
router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "No body found" });
  const { title, author, content } = req.body;
  if (!(title && author && content))
    return res
      .status(400)
      .json({ message: "supply body with title, author and content" });
  const titleExists = await articleModel.exists({ title });
  if (titleExists)
    return res.status(400).json({ message: "Title already exists" });
  await articleModel.create({ title, author, content });
  return res.status(200).json({ message: "Created article successfully" });
});

export default router;
