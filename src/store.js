import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./redux/client/clientSlice";

export default configureStore({
    reducer: {
        client: clientReducer,
    },
})