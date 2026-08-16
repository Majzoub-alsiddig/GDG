import { Schema, model } from "mongoose";

//TODO: Change the schemas from string to a zod enforced schema

interface ICourse {
  name: string;
  image?: string;
  url: string;
}

const courseSchema = new Schema<ICourse>(
  {
    name: { type: String, required: true },
    image: { type: String, required: false, default: "default" },
    url: { type: String, required: true },
  },
  { timestamps: true },
);

const courseModel = model<ICourse>("Course", courseSchema);

export default courseModel;
