import { Request, Response } from "express";
import courseModel from "../models/courses";

export const get_courses = async (req: Request, res: Response) => {
  const courses = await courseModel.find();
  return res.status(200).json({ courses });
};

export const get_course_by_id = async (req: Request, res: Response) => {
  const { id } = req.params;
  const course = await courseModel.findById(id);
  return res.status(200).json(course);
};

export const post_course = async (req: Request, res: Response) => {
  if (!req.body) return res.status(400).json({ message: "empty body error" });
  const { name, url } = req.body;
  if (!(name && url))
    return res.status(400).json({ message: "Supply name and url in body" });
  await courseModel.create({ name, url });
  return res.status(200).json({ message: "Create user successfully" });
};
