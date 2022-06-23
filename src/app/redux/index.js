import { configureStore } from '@reduxjs/toolkit'

import { modeReducer, projectReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        project: projectReducer
    }
})