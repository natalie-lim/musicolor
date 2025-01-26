import { atom, selector } from "recoil";

const userIDState = atom({
    key: 'userID',
    default: 'not working',
  });

export { userIDState };