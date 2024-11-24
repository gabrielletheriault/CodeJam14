import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import { getUserByEmail } from '../../../lib/getByUser';
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async (request: NextRequest) => {
  const {name, email, password} = await request.json();

  console.log(name, email, password);

  // Create a DB Conenction
  await dbConnect();
  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);
  // Form a DB payload
  const newUser = {
    password: hashedPassword,
    email
  }
  // Update the DB
  try {
    await createUser(newUser);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Error creating user:", errorMessage);

    return new NextResponse(errorMessage, {
      status: 500,
    });
  }

  return new NextResponse("User has been created", {
    status: 201,
  });

}