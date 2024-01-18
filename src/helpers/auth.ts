import { IUser } from "../types/user";

export const saveToLocalStorage = ({ username, phone, email }: IUser) => {
  const GrowUser = {
    username: username,
    phone: phone,
    email: email,
  };
  if (!username || !phone || !email || typeof window === "undefined") {
    return;
  }
  localStorage.setItem("GrowUser", JSON.stringify(GrowUser));
};

export const getUserFromLocalStorage = (): IUser | null => {
  const localStorageData = localStorage.getItem("GrowUser");
  if (!localStorageData) {
    return null;
  }
  const GrowUser = JSON.parse(localStorageData);

  return GrowUser;
};
