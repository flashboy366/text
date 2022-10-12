import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./reducers/profileReducer/profileReducer";
import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";

const reducers = {
    profileData: profileReducer,
    messagesData: messagesReducer,
}

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
})

export default store