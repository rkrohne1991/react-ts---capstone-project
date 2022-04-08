import { User } from "firebase/auth";

export const selectCurrentUser = (state: any): User | null =>
  state.user.currentUser;
