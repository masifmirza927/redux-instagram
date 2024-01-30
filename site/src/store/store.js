import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "../redux/authSlice";

const store = configureStore({
    reducer: {
      userAuth: authSlice.reducer,
    },
  });
  
  export default store;