import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    panelActiveState: [],
    idTags: [null],
    clientPassword: "",
    clientInfo: {},
    avatarInfo: {},
    allClientsInfo: [],
    allPetsInfo: [],
    tabValue: 0,
  },
  reducers: {
    setPanelActiveState: (state, action) => {
      state.panelActiveState.length = 0;
      state.panelActiveState.push(action.payload);
    },

    setTabValue: (state, action) => {
      state.tabValue = action.payload;
    },

    addNewIdTag: (state, action) => {
        const body = {Tag_ID: action.payload};
        const response = axios.post(`${process.env.REACT_APP_Pet_Backend_Url}/add_tagid/`, body)
        .then((response) => {
          state.idTags.push(response.data)
            if(response.status == "200") {
                alert("Successfully added!");
            } 
        }).catch((error) => {

        })
    },

    loadAllIdTags: (state, action) => {
      // state.idTags.length = 0;
      // state.idTags.push(action.payload);
      return {
        ...state,
        idTags: action.payload
    }
    },

    updatePassword: (state, action) => {
      return {
        ...state,
        clientPassword: action.payload,
      };
    },

    uploadClientInfo: (state, action) => {
      return {
        ...state,
        clientInfo: action.payload,
      };
    },

    uploadPetInfo: (state, action) => {
      return {
        ...state,
        avatarInfo: action.payload,
      };
    },

    loadAllClientsInfo: (state, action) => {
      state.allClientsInfo.length = 0;
      state.allClientsInfo.push(action.payload);
    },

    loadAllPetsInfo: (state, action) => {
      state.allPetsInfo.length = 0;
      state.allPetsInfo.push(action.payload);
    },
  },
});

export const {
  updatePassword,
  addNewIdTag,
  loadAllIdTags,
  uploadClientInfo,
  uploadPetInfo,
  loadAllClientsInfo,
  loadAllPetsInfo,
  setPanelActiveState,
} = clientSlice.actions;

export default clientSlice.reducer;
