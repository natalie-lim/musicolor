import { atom } from "recoil";

const userIDState = atom({
    key: 'userID',
    default: '',
  });

const genreState = atom({
  key: 'genre',
  default: 'pop'
})
export { userIDState, genreState };