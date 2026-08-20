import contactModel from "../models/contacts";
import { Request, Response } from "express";
export const get_contacts = async (req: Request, res: Response) => {
  const contacts = await contactModel.find();
  return res.status(200).json({ contacts });
};

export const get_contact_by_id = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contact = await contactModel.findById(id);
  return res.status(200).json(contact);
};

export const post_contact = async (req: Request, res: Response) => {
  if (!req.body) return res.status(400).json({ message: "Supply valid body" });
  const { role, name, info, url } = req.body;
  if (!(role && name && info && url))
    return res.status(400).json({ message: "supply role,name,info and url" });
  const nameExists = await contactModel.exists({ name });
  if (nameExists)
    return res.status(400).json({ message: "Name already exists" });
  await contactModel.create({ role, name, info, url });
  return res.status(200).json({ message: "Created contact successfully" });
};
