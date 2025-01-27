import { atom, selector } from "recoil";

const userIDState = atom({
    key: 'userID',
    default: '',
  });

export { userIDState };