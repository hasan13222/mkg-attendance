import { createSlice } from "@reduxjs/toolkit";

const searchOptions = {
    showSearchBox: false,
    fullPay: "inactive",
    partialPay: "inactive",
};

export const feeSearchSlice = createSlice({
  name: "feeSearch",
  initialState: searchOptions,
  reducers: {
    setShowSearchBox(state, action) {
      state.showSearchBox = action.payload;
    },
    setFullPay(state, action) {
        return {...state, fullPay: action.payload, partialPay: "inactive"};
    },
    setPartialPay(state, action){
        return {...state, partialPay: action.payload, fullPay: "inactive"}
    },
    setCollect(state, action){
        console.log("something")
        if(state.fullPay === "inactive" && state.partialPay === "inactive"){
            return {...state, fullPay: "pending", partialPay: "pending" }
        } else{
            return {...state, fullPay: "inactive", partialPay: "inactive" }
        }
        
    }
  },
});

export const {
  setShowSearchBox,
  setFullPay,
  setPartialPay,
  setCollect
} = feeSearchSlice.actions;

export default feeSearchSlice.reducer;
