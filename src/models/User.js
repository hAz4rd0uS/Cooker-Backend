import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    profileImageUrl: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
