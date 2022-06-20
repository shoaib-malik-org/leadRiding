import { createSlice } from "@reduxjs/toolkit";


// Global variables
var id = 0;

// slice method

const slice = createSlice({
    name: 'All Error',
    initialState: {},
    reducers: {
        vendorInfo: (state, action) => {
            state.user = action.payload.user;
        }
    }
})

export const { vendorInfo } = slice.actions;
export default slice.reducer
