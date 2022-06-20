
import reducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer,
    
});