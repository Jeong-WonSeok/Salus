
import { createSlice } from '@reduxjs/toolkit';

const initialWeeklyState = {statsRunning:70, statsUpperBody:40, statsLowerBody: 60}

const statsWeeklySlice = createSlice({
  name: 'statsWeekly',
  initialState: initialWeeklyState,
  reducers: {
    fetchWeeklyState(state, action) {
      state.statsRunning = action.payload.statsRunning;
      state.statsUpperBody = action.payload.statsUpperBody;
      state.statsLowerBody = action.payload.statsLowerBody;
    }
  }
})

export const statsWeeklyActions = statsWeeklySlice.actions
export default statsWeeklySlice