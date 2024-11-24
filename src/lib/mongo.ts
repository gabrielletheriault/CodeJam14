import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(process.env.MONGODB_URL));
    return conn;
  } catch (e) {
    // Ensure the error is of type string or convert it to a string
    const errorMessage = e instanceof Error ? e.message : String(e);
    throw new Error(errorMessage);
  }
}