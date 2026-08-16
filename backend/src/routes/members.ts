import { Router } from "express";
import { MemberModel } from "../models/members";

const router = Router();

const EMPTY_BODY_ERROR = "provide email and name in body";
const SUCCESSFULL_USER_MESSAGE = "Created user successfully";

router.get("/", async (req, res) => {
  const members = await MemberModel.find();
  return res.json({ members });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const member = await MemberModel.findById(id);
  return res.status(200).json({ member });
});

//TODO: Make those routes protected
router.post("/", async (req, res) => {
  if (!req.body) return res.status(400).json({ message: EMPTY_BODY_ERROR });
  const { username, email } = req.body;
  if (!(username && email))
    return res.status(400).json({ message: EMPTY_BODY_ERROR });
  const usedEmail = await MemberModel.exists({ email });
  const usedName = await MemberModel.exists({ username });
  if (usedEmail || usedName)
    return res.status(400).json({ message: EMPTY_BODY_ERROR });
  await MemberModel.create({ username, email });
  return res.status(200).json({ message: SUCCESSFULL_USER_MESSAGE });
});

//TODO:
// router.patch("/:id", async (req, res) => {
//   if (!req.body) return res.status(400).json({ message: EMPTY_BODY_ERROR });
//   const { username, email, image } = req.body;
// });

export default router;
