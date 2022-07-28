import { createSlice } from '@reduxjs/toolkit'

const initialSignupState = { email: '', lastName: '', firstName: '', password:'', gender: 0, phone: '', birthDay: {}}

const signupSlice = createSlice({
  name: 'signup',
  initialState:initialSignupState,
  reducers: {
    fetchBody(state, action) {
      state.email = action.payload.email ? action.payload.email : ''
      state.lastName = action.payload.lastName ? action.payload.lastName : "";
      state.firstName = action.payload.firstName ? action.payload.firstName : "";
      state.password = action.payload.password ? action.payload.password : "";
      state.gender = action.payload.gender ? action.payload.gender : 0;
      state.phone = action.payload.phone ? action.payload.phone : "";
      state.birthDay = action.payload.birthDay; //아직 타입을 확인 못함
    }
  }
})

export const signupActions = signupSlice.actions
export default signupSlice