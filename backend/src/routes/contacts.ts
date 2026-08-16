import { Router } from "express";
import contactModel from "../models/contacts";

const router = Router();

//TODO: Make the returned value filtered to wanted fields only
//TODO: Make patch route for all paths
router.get("/", async (req, res) => {
  const contacts = await contactModel.find();
  return res.status(200).json({ contacts });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const contact = await contactModel.findById(id);
  return res.status(200).json(contact);
});
router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "Supply valid body" });
  const { role, name, info, url } = req.body;
  if (!(role && name && info && url))
    return res.status(400).json({ message: "supply role,name,info and url" });
  const nameExists = await contactModel.exists({ name });
  if (nameExists)
    return res.status(400).json({ message: "Name already exists" });
  await contactModel.create({ role, name, info, url });
  return res.status(200).json({ message: "Created contact successfully" });
});

export default router;
