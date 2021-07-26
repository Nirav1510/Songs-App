import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Pehla Nash", duration: "3:40" },
    { title: "Bazziger O Bazziger", duration: "2:40" },
    { title: "Sach keh raha hai deewana", duration: "3:20" },
    { title: "Saat samundar parr", duration: "4:30" },
  ];
};

const songSelectedReduceer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: songSelectedReduceer,
});
