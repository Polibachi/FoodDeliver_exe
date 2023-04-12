import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    text: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      default: []
    },
    viewsCount: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
export default mongoose.model("Post", PostSchema);
