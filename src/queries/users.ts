import { User, UserType } from "@/model/user-model";

export async function createUser(user: UserType): Promise<void> {
    try {
      await User.create(user);
    } catch (e) {
      // Safely handle the error
      const errorMessage = e instanceof Error ? e.message : String(e);
      throw new Error(errorMessage);
    }
  }