import { configureStore } from "@reduxjs/toolkit";

import signupSlice from './signup'

const store  =  configureStore({
  reducer: { signup: signupSlice.reducer }
})


export default store;