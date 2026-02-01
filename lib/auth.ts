// lib/auth.ts
import jwt from "jsonwebtoken";

export const createToken = (email: string) => {
  return jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
};
