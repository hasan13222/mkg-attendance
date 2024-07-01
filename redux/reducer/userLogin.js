import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
        console.log(action.payload)
      return { ...state, user: action.payload };
    },
  },
});

export const {setUser} = userLoginSlice.actions;

export default userLoginSlice.reducer;
