import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);

export interface UserType {
    email: string;
    password: string;
    // Add other fields as needed
}