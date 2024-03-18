import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    title_cate: { type: String, required: true },
    quantity_cate: { type: Number }
    // author: { type: String },
    // image: { type: String },
    // price: { type: Number },
    // rate: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Category = mongoose.model("Category", CategorySchema);

export default Category;
