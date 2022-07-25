import { createSlice } from '@reduxjs/toolkit'

const initialSignupState = { email: '', lastName: '', firstName: '', password:'', gender: 0, phone: '', birthDay: {}}

const signupSlice = createSlice({
  name: 'signup',
  initialState:initialSignupState,
  reducers: {
    fetchBody(state, action) {
      state.email = action.email ? action.email : ''
      state.lastName = action.lastName ? action.lastName : ''
      state.firstName = action.firstName ? action.firstName : ''
      state.password = action.password ? action.password : ''
      state.gender = action.gender ? action.gender : 0
      state.phone = action.phone ? action.phone : ''
      state.birthDay = action.birthDay //아직 타입을 확인 못함
    }
  }
})

export const signupActions = signupSlice.actions
export default signupSlice