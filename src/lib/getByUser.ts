import { User } from '../model/user-model';  // Adjust the path to your actual User model

export const getUserByEmail = async (email: string) => {
  try {
    // Query the database to find a user with the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return null; // Return null if the user doesn't exist
    }

    // Return the user document
    return user;
  } catch (err) {
    console.error("Error fetching user by email:", err);
    throw new Error("Error fetching user by email");
  }
};