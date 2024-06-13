import { createSlice } from "@reduxjs/toolkit";
const today = new Date().getDate();
const searchOptions = {
  date: today,
  date2: today,
  open: false,
  open2: false,
  classVal: "",
  subjectVal: "",
};

export const reportSearchSlice = createSlice({
  name: "reportSearch",
  initialState: searchOptions,
  reducers: {
    setDate(state, action) {
      return { ...state, date: action.payload };
    },
    setDate2(state, action) {
      return { ...state, date2: action.payload };
    },
    setOpen(state, action) {
      return { ...state, open: action.payload };
    },
    setOpen2(state, action) {
      return { ...state, open2: action.payload };
    },
    setClassVal(state, action) {
      return { ...state, classVal: action.payload };
    },
    setSubjectVal(state, action) {
      return { ...state, subjectVal: action.payload };
    },
  },
});

export const {
  setDate,
  setDate2,
  setOpen,
  setOpen2,
  setClassVal,
  setSubjectVal,
} = reportSearchSlice.actions;

export default reportSearchSlice.reducer;
