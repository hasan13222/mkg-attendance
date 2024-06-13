import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer";
import { postApi } from "../reducer/test";



const store = configureStore({
    reducer: reducer,
    middleware: (gdm) => gdm().concat(postApi.middleware)
})

export default store;