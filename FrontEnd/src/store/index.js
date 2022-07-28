import { configureStore } from "@reduxjs/toolkit";

import signupSlice from './signup'
import statsWeeklySlice from "./weekly-workout";

const store  =  configureStore({
  reducer: { signup: signupSlice.reducer, statsWeekly: statsWeeklySlice.reducer }
})


export default store;