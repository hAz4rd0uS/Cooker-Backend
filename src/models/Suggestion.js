import mongoose from "mongoose";

const { Schema } = mongoose;

const suggestionSchema = new Schema(
  {
    from: {
      type: Schema.Types.ObjectId,
      required: true
    },
    recipe: {
      type: Schema.Types.ObjectId,
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
    valid: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Suggestion", suggestionSchema);
