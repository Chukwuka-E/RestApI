import { User } from "../types/user";

const users: User[] = []; // In-memory storage for simplicity

export const addUser = (user: User): void => {
  users.push(user);
};

export const findUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};

export const findUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};