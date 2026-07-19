import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularDishes: (state, action) => {
      //state(current state), action(simply data)
      state.popularDishes = action.payload;
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});
// Exported to use them in cpmponents
export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

// Exported to connect it to redux store
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
