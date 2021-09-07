import { createContext } from "react";

export const CredentialsConText = createContext({
  storedCredentials: {},
  setStoreCredentials: () => {},
});
