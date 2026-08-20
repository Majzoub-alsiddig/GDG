import { Request, Response } from "express";
import articleModel from "../models/articles";

export const get_articles = async (req: Request, res: Response) => {
  const articles = await articleModel.find();
  return res.status(200).json({ articles });
};

export const get_article_by_id = async (req: Request, res: Response) => {
  const { id } = req.params;
  const article = await articleModel.find({ id });
  return res.status(200).json({ article });
};

export const create_article = async (req: Request, res: Response) => {
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
};
