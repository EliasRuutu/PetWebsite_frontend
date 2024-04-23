import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        clientPassword: "",
    },
    reducers: {
        updatePassword: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        }
    }
})

export const { updatePassword } = clientSlice.actions;

export default clientSlice.reducer;