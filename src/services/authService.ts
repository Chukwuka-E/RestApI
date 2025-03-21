import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { User } from "../types/user";
import { AuthPayload } from "../types/auth";
import { addUser, findUserByEmail } from "../models/userModel";
import { hashPassword, comparePassword } from "../utils/hashUtil";

export const registerUser = async (username: string, email: string, password: string): Promise<User> => {
  const hashedPassword = await hashPassword(password);
  const newUser: User = {
    id: uuidv4(),
    username,
    email,
    password: hashedPassword,
  };

  await addUser(newUser); // Ensure the user is added to the DB
  return newUser;
};

export const loginUser = async (email: string, password: string): Promise<string | null> => {
  const user = await findUserByEmail(email);
  if (!user) return null;

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) return null;

  // Cast both secret and expiresIn to correct types
  const secret = process.env.JWT_SECRET as jwt.Secret || "defaultSecret";
  const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

  const payload: AuthPayload = { userId: user.id, username: user.username };

  // Fully typed solution
  const token = jwt.sign(
    payload,
    secret,
    {
      expiresIn: expiresIn as jwt.SignOptions['expiresIn'] // Match exact type
    }
  );

  return token;
};