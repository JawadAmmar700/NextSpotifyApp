import { atom } from "recoil"

const searchText = atom({
  key: "searchText",
  default: "",
})
const nowPlaying = atom({
  key: "nowPlaying",
  default: null,
})

export { searchText, nowPlaying }
