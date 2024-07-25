import { combineReducers } from "redux";
import reportSearch from "./reportSearch";
import { postApi } from './test';
import feeSearch from "./feeSearch";
import userLogin from "./userLogin";
import reportSlice from "./reportSlice";

const rootReducer = combineReducers({
   feeSearch,
   userLogin,
   reportSlice,
   [postApi.reducerPath]: postApi.reducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>