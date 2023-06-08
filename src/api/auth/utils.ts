import { User } from "@prisma/client";
import jwt from 'jsonwebtoken';


export function signToken(user: User): string {
  return jwt.sign({
    email: user.email,
    id: user.id,
    time: Date.now(),
  }, process.env.JWT_SECRET!,
  {expiresIn: process.env.JWT_EXPIRES_IN!});
}
