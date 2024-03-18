import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title_blog: { type: String, required: true },
    content_blog: { type: String },
    quantity_blog: { type: Number }
    // author: { type: String },
    // image: { type: String },
    // price: { type: Number },
    // rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
