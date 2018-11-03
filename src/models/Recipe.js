import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema(
  {
    creator: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    ingredients: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Recipe", recipeSchema);
