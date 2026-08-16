import { Router } from "express";
import { MemberModel } from "../models/members";

const router = Router();

router.get("/", async (req, res) => {
  const members = await MemberModel.find();
  return res.json({ members });
});

router.post("/", async (req, res) => {
  const name = req.body.name;
});
router.patch("/:id", router_update);

export default router;
