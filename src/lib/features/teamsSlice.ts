import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TeamData {
  firstName: string;
  lastName: string;
  picture: string;
}

const initialState: TeamData[] = [];

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<TeamData[]>) => {
      return [...action.payload];
    },
  },
});

export const { setTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
