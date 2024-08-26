import { User } from "./user";

export interface UserResponse {
  message: string;
  success: boolean;
  data: User;
}
