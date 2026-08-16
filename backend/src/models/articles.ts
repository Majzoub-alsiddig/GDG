import { Schema, model } from "mongoose";

interface IArticle {
  title: string;
  author: string;
  content: string;
}

const articleSchema = new Schema<IArticle>(
  {
    title: { required: true, type: String },
    author: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

const articleModel = model<IArticle>("Article", articleSchema);

export default articleModel;
