import { Schema, model } from "mongoose";

//TODO: Add default image
interface IContact {
  image?: string;
  name: string;
  role: string;
  info: string;
  url: string;
}

const contactSchema = new Schema<IContact>({
  role: { type: String, required: true },
  name: { type: String, required: true },
  info: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: false },
});

const contactModel = model<IContact>("Contact", contactSchema);

export default contactModel;
