import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        createUser: userSlice.reducer,
        errorMsg: errorMsgSlice.reducer,
    }
})

export default store;