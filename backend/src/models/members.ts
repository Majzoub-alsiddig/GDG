import { model, Schema } from "mongoose";

interface IMember {
  username: string;
  email: string;
  photo?: string;
}

const memberSchema = new Schema<IMember>({
  username: { type: String, required: true },
  email: { type: String, required: true },
});

export const MemberModel = model<IMember>("Member", memberSchema);
