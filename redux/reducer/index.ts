import { combineReducers } from "redux";
import reportSearch from "./reportSearch";
import { postApi } from './test';
import feeSearch from "./feeSearch";
import userLogin from "./userLogin";

const rootReducer = combineReducers({
   reportSearch,
   feeSearch,
   userLogin,
   [postApi.reducerPath]: postApi.reducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>