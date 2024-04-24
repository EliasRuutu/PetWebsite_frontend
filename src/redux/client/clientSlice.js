import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: 'client',
    initialState: {
        clientPassword: "",
        clientInfo: {},
        avatarInfo: {},
        allClientsInfo: [],
        allPetsInfo: []
    },
    reducers: {
        updatePassword: (state, action) => {
            return {
                ...state,
                clientPassword: action.payload
            }
        },

        uploadClientInfo: (state, action) => {
            return {
                ...state,
                clientInfo: action.payload
            }
        },

        uploadPetInfo: (state, action) => {
            return {
                ...state,
                avatarInfo: action.payload
            }
        },

        loadAllClientsInfo: (state, action) => {
            state.allClientsInfo.length = 0;
            state.allClientsInfo.push(action.payload)
        },

        loadAllPetsInfo:(state, action) => {
            state.allPetsInfo.length = 0;
            state.allPetsInfo.push( action.payload);
        }
    }
})

export const { updatePassword, uploadClientInfo, uploadPetInfo, loadAllClientsInfo, loadAllPetsInfo } = clientSlice.actions;

export default clientSlice.reducer;